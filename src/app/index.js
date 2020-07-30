import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import { NavBar } from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import { FaPlus, FaListUl, FaHome } from "react-icons/fa";

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
      <div className="row">
        <div
          className="col-md-2 d-none d-lg-block"
          style={{ height: `100vh`, backgroundColor: `aliceblue` }}
        >
          <div id="navigation">
            <ul style={{ listStyleType: `none`, margin: `0`, padding: `0` }}>
              <li style={{ padding: `15px 10px` }}>
                <Link to="/">
                  <FaHome />
                  <span style={{ paddingLeft: `8px` }}>Home</span>
                </Link>
              </li>
              <li style={{ padding: `15px 10px` }}>
                <Link to="/skateparks/create">
                  <FaPlus />
                  <span style={{ paddingLeft: `8px` }}>Add New Spot</span>
                </Link>
              </li>
              <li style={{ padding: `15px 10px` }}>
                <Link to="/skateparks/list">
                  <FaListUl />
                  <span style={{ paddingLeft: `8px` }}>List All Spots</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="col-md-12 col-lg-10"
          style={{ height: `100vh`, backgroundColor: `antiquewhite` }}
        >
          <Switch>
            <Route path="/" exact component={SpotGrid} />
            <Route path="/dashboard" exact component={Dashboard} />
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
        </div>
      </div>
    </Router>
  );
}

export default App;
