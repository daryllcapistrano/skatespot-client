import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import { Auth0Provider } from "@auth0/auth0-react";
// components
import NavBar from "../components/NavBar";
import { Dashboard } from "../components/Dashboard";
import { Sidebar } from "../components/Sidebar";
// styles
import GlobalStyles from "./GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
// pages for router
import {
  SkateparkInsert,
  SkateparkUpdate,
  SkateparkDetail,
  SkateparkAll,
} from "../pages";

function App() {
  const uri = "https://127.0.0.1:8000";

  return (
    <Router>
      <GlobalStyles />
      <Auth0Provider
        domain="dev-igzgv951.us.auth0.com"
        clientId="ma2vuxuKiM6Uul4f6c2Yej6ApSJaKPz9"
        // window.location.origin from tutorial was returning localhost which caused Auth0 to break
        redirectUri={uri}
      >
        <ToastContainer
          transition={Slide}
          position="top-right"
          autoClose={1500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="row" style={{ margin: `0`, width: `100vw` }}>
          <Sidebar />
          <Dashboard>
            <NavBar />
            <Switch>
              <Route path="/" exact component={SkateparkAll} />
              <Route
                path="/skateparks/create"
                exact
                component={SkateparkInsert}
              />
              <Route
                path="/skateparks/details/:id"
                exact
                component={SkateparkDetail}
              />
              <Route
                path="/skateparks/update/:id"
                exact
                component={SkateparkUpdate}
              />
            </Switch>
          </Dashboard>
        </div>
      </Auth0Provider>
    </Router>
  );
}

export default App;
