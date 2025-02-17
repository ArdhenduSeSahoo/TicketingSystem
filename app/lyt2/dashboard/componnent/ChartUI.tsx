"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


export default function DChartUI() {
  const [state, setState] = useState({
    series: [
      {
        name: "XYZ MOTORS",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        // zoom: {
        //   type: "x",
        //   enabled: true,
        //   autoScaleYaxis: true,
        // },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Stock Price Movement",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {},
        title: {
          text: "Price",
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      tooltip: {
        shared: false,
        y: {},
      },
    },
  });

  return (
    <div>
      <div>
        <div id="chart">
          <ApexChart
            type="area"
            options={state.options}
            series={state.series}
            // width={chart_width}
            height={320}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </div>
  );
}
