import React, { Component } from "react";
// import { Link } from "react-router-dom";
import api from "../api";

// import { FaPlus, FaListUl } from "react-icons/fa";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skateparks: [],
      isLoading: false,
    };

    this.componentDidMount = async () => {
      this.setState({ isLoading: true });

      await api.getAllSkateparks().then((skateparks) => {
        this.setState({
          skateparks: skateparks.data.data,
          isLoading: false,
        });
      });
    };
  }

  render() {
    return (
      <>
        <div className="row">
          {/* <div
            className="col-md-2 d-none d-lg-block"
            style={{ height: `100vh`, backgroundColor: `aliceblue` }}
          >
            sidebar
            <div>logo here</div>
            <div id="navigation">
              <ul style={{ listStyleType: `none`, margin: `0`, padding: `0` }}>
                <li>
                  <Link to="/skateparks/create">
                    <FaPlus />
                    add new spot
                  </Link>
                </li>
                <li>
                  <Link to="/skateparks/list">
                    <FaListUl />
                    list spots
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div
            className="col-md-12 col-lg-10"
            style={{ height: `100vh`, backgroundColor: `antiquewhite` }}
          >
            main content
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
