import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import { NavBar } from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import {
  SkateparkList,
  SkateparkInsert,
  SkateparkUpdate,
  SkateparkDetail,
  SpotGrid,
  Dashboard,
} from "../pages";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'IBM Plex Serif', serif;
    color: #000000;
    
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
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
      <NavBar />
      <Switch>
        <Route path="/" exact component={SpotGrid} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/skateparks/list" exact component={SkateparkList} />
        <Route path="/skateparks/create" exact component={SkateparkInsert} />
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
    </Router>
  );
}

export default App;
