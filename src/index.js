import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./tailwind.output.css";
import "./custom.css";



ReactDOM.render(
  <Auth0Provider
    domain="todoist.us.auth0.com"
    clientId="WNUA4fHiIgEbUrPwiDkHSkHj1peLib5O"
    redirectUri="http://localhost:3000"
    audience="https://todoist.in/api/v1"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
