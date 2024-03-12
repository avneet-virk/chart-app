import React from "react";
import { Link } from "react-router-dom";

const ChartMain = () => {
  return (
    <div className="mainContent">
      <h2>Chart packages</h2>
      <p>
        Below adding the packages click on that to check the example of that
        package charts
      </p>
      <div className="chartLinks">
        <Link to="chartJs">ChartJs</Link>
        <Link to="reCharts">ReCharts</Link>
        <Link to="victory">Victory Chart</Link>
        <Link to="eCharts">E Charts</Link>
      </div>
    </div>
  );
};

export default ChartMain;
