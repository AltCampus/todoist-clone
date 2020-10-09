import React, { useReducer } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import reducer from "./store/reducer/index";
import { ApolloProvider } from "@apollo/client";

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "apollo-boost";

const initialState = {
  personal_tasks: [],
};

const httpLink = new HttpLink({
  uri: localStorage.endPoint || "",
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "x-hasura-admin-secret": localStorage.adminSecret || "",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
});

export const TodoContext = React.createContext();

function AuthRoutes() {
  return (
    <Route exact path="/dashboard" component={Dashboard} />
      
    
  );
}

function NonAuthRoutes() {
  return (
    <Route exact path="/login" component={Login} />
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {console.log(localStorage.endPoint && localStorage.adminSecret)}
            {localStorage.endPoint && localStorage.adminSecret ? (
              <AuthRoutes />
            ) : (
              <NonAuthRoutes />
            )}
          </Switch>
        </Router>
      </ApolloProvider>{" "}
    </TodoContext.Provider>
  );
}

export default App;
