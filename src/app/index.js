import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NavBar } from "../components";
import {
  SkateparkList,
  SkateparkInsert,
  SkateparkUpdate,
  SkateparkDetail,
} from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={1000}
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
