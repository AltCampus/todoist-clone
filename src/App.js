import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Apollo from "./Apollo";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

async function setToken(getToken) {
  let token = await getToken({});
  localStorage.setItem("accessToken", token);
}

function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  if (isLoading) {
    return (
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    setToken(getAccessTokenSilently);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home data={{ user, logout, loginWithRedirect, isAuthenticated }} />
        </Route>
        <Route exact path="/dashboard">
          {isAuthenticated ? <Dashboard data={{logout,user}} /> : ""}
        </Route>
        {isAuthenticated ? <Apollo /> : ""}
      </Switch>
    </Router>
  );
}

export default App;
