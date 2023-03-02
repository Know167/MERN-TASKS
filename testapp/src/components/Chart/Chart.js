import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  let arrayOfValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totalMaximum = Math.max(...arrayOfValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
}

export default Chart;
