'use client'
import CanvasJSReact from "@canvasjs/react-charts";


export interface IBotResultChartPlotLayoutProps {
}

export default function BotResultChartPlotLayout (props: IBotResultChartPlotLayoutProps) {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    animationEnabled: true,
    zoomEnabled: true,
    responsive: true,
    maintainAspectRatio: false,
    axisY: {
      title: "Number of Downloads",
    },
    axisX: {
      title: "Apps",
      labelAngle: 0,
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "line", //"column",
        dataPoints: [
          { label: "Apple", y: 10 },
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 300 },
          { label: "Grape", y: 28 },
          { label: "Apple", y: 100 },
          { label: "Orange", y: 150 },
          { label: "Banana", y: 250 },
          { label: "Mango", y: 330 },
          { label: "Grape", y: 280 },
        ],
      },
    ],
  };
  return (
    <div className="mt-10">
      <CanvasJSChart
        options={options}
        
      />
     
    </div>
  );

}
