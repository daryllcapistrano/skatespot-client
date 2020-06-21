import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import {
  SkateparkList,
  SkateparkInsert,
  SkateparkUpdate,
  SkateparkDetail,
} from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
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
