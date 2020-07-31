import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaListUl, FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="col-md-2 d-none d-lg-block"
      style={{
        height: `100vh`,
        backgroundColor: `#121212`,
        borderRight: `1px solid #8693AB`,
      }}
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
  );
};

export default Sidebar;
