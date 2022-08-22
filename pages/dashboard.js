import React from "react";
import withPrivateRoute from "../src/components/withPrivateRoute";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default withPrivateRoute(Dashboard);
