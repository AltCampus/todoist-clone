import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

import { ApolloProvider } from "@apollo/client";

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "apollo-boost";

const httpLink = new HttpLink({
  uri: "https://glad-pipefish-27.hasura.app/v1/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
 
  operation.setContext({
    headers: {
      "x-hasura-admin-secret": "123456789",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/">
         
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
         
        </Route>
        
      </Switch>
    </Router>
    </ApolloProvider> 
  );
}

export default App;
