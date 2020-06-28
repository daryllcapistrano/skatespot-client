import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ToastContainer, Slide } from "react-toastify";

import { NavBar } from "../components/NavBar";

import {
  SkateparkList,
  SkateparkInsert,
  SkateparkUpdate,
  SkateparkDetail,
  SpotGrid,
} from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
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
