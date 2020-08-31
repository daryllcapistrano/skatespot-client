import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
// components
import { NavBar } from "../components/NavBar";
import { Dashboard } from "../components/Dashboard";
import { Sidebar } from "../components/Sidebar";
// styles
import GlobalStyles from "./GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
// pages for router
import {
  SkateparkList,
  SkateparkInsert,
  SkateparkUpdate,
  SkateparkDetail,
  SkateparkAll,
} from "../pages";

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
      <div className="row" style={{ margin: `0`, height: `100vh` }}>
        <Sidebar />
        <Dashboard>
          <NavBar />
          <Switch>
            <Route path="/" exact component={SkateparkAll} />
            <Route path="/skateparks/list" exact component={SkateparkList} />
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
    </Router>
  );
}

export default App;
