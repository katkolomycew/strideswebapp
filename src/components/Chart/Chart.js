import React from "react";
import ReactECharts from "echarts-for-react";

const Chart = () => {
  const options = {
    grid: {
      left: "2%",
      right: "6%",
      top: "5%",
      height: "125px",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "line",
        data: [12, 13, 10, 13, 9, 23, 21],
      },
      {
        type: "line",
        data: [22, 18, 19, 23, 29, 33, 31],
      },
      {
        type: "line",
        data: [15, 23, 20, 15, 19, 33, 41],
      },
      {
        type: "line",
        data: [32, 33, 30, 33, 39, 33, 32],
      },
      {
        type: "line",
        data: [82, 93, 90, 93, 12, 13, 13],
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default Chart;
