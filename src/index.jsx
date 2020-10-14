import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
// import { Auth0Provider } from "@auth0/auth0-react";

// const uri = "https://127.0.0.1:8000"

ReactDOM.render(
  // <Auth0Provider
  //   domain="dev-igzgv951.us.auth0.com"
  //   clientId="ma2vuxuKiM6Uul4f6c2Yej6ApSJaKPz9"
  //   // window.location.origin from tutorial was returning localhost which caused Auth0 to break
  //   redirectUri={uri}
  // >
  <App />,
  // </Auth0Provider>,
  document.getElementById("root")
);
