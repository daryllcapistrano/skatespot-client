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
  // SkateparkListTest,
} from "../pages";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=IBM+Plex+Serif:ital@0;1&display=swap');
  body {
    ${
      "" /* font-family: 'IBM Plex Sans', sans-serif;
    font-family: 'IBM Plex Sans Condensed', sans-serif; */
    }
    font-family: 'IBM Plex Serif', serif;
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
      <div id="page" style={{ display: `flex` }}>
        <div id="sidebar" style={{ width: `300px`, background: `red` }}>
          <div>sidebar content</div>
        </div>
        <div
          id="content"
          style={{
            background: `blue`,
            flex: `1 0 auto`,
            /* enable grow, disable shrink */
          }}
        >
          <Switch>
            <Route path="/" exact component={SpotGrid} />
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
