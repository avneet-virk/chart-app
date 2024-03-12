import React, { useState } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import { Link } from "react-router-dom";

const ChartMain = () => {
  const [chartType, setChartType] = useState("bar");

  return (
    <>
      <div className="chartNav">
        <p><Link to="/">Back</Link></p>
        <p onClick={()=>setChartType('bar')}>Bar Chart</p>
        <p onClick={()=>setChartType('pie')}>Pie Chart</p>
        <p onClick={()=>setChartType('line')}>Line Chart</p>
        <p onClick={()=>setChartType('radar')}>Radar Chart</p>
      </div>
      <div className="chartDiv">
        {chartType === "bar" && <BarChart />}
        {chartType === "pie" && <PieChart />}
        {chartType === "line" && <LineChart />}
        {chartType === "radar" && <RadarChart />}
      </div>
    </>
  );
};

export default ChartMain;
