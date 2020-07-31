import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div
      className="col-md-12 col-lg-10"
      style={{ height: `100vh`, backgroundColor: `#2D2A32` }}
    >
      {children}
    </div>
  );
};

export default Dashboard;
