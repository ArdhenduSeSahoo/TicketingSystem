// "use client";
// import {
//   BotResultChartDataModel,
//   ChartDataSet,
// } from "@/lib/Models/BotModels/BotModels";
// import CanvasJSReact from "@canvasjs/react-charts";

// export interface IBotResultChartPlotLayoutProps {
//   ChartDataSet: BotResultChartDataModel;
// }

// export default function BotResultChartPlotLayout(
//   props: IBotResultChartPlotLayoutProps,
// ) {
//   const CanvasJSChart = CanvasJSReact.CanvasJSChart;
//   //console.log(props.ChartDataSet.chartDataSet);
//   const datasets: ChartDataSet[] = [];
//   if (props.ChartDataSet != null || props.ChartDataSet != undefined) {
//     const chardataapi = props.ChartDataSet?.chartDataSet;
//     for (let index = 0; index < 50; index++) {
//       //chardataapi[index].label;
//       //chardataapi[index].y
//       datasets.push({
//         label: chardataapi[index].label,
//         y: chardataapi[index].y,
//       });
//     }
//   }
//   // console.log("data set");
//   // console.log(datasets);

//   const options = {
//     animationEnabled: true,
//     zoomEnabled: true,
//     responsive: true,
//     maintainAspectRatio: false,

//     axisY: {
//       title: props.ChartDataSet?.y_axis_lable ?? "",
//     },
//     axisX: {
//       title: props.ChartDataSet?.x_axis_lable ?? "",
//       labelAngle: -45,
//       interval: 1,
//     },
//     data: [
//       {
//         // Change type to "doughnut", "line", "splineArea", etc.
//         type: "line", //"column",
//         dataPoints: datasets, //props.ChartDataSet?.chartDataSet ?? [],
//       },
//     ],
//   };

//   console.log(Math.max(2000, datasets.length * 20));

//   return (
//     <>
//       <div style={{ overflowX: "auto", maxWidth: "100%" }}>
//         <div
//           style={{
//             width: `${datasets.length * 35}px`,
//           }}
//         >
//           <CanvasJSChart options={options} />
//         </div>{" "}
//       </div>
//     </>
//   );
// }
