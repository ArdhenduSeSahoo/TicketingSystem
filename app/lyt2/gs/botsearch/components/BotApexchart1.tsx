"use client"; // if you use app dir, don't forget this line

import { BotResultChartDataModel } from "@/lib/Models/BotModels/BotModels";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export interface IBotLineChartProps {
  ChartDataSet: BotResultChartDataModel;
}
export function ApexChart1(props: IBotLineChartProps) {
  const x_axis_data: string[] = [];
  const y_axis_data: number[] = [];

  if (props.ChartDataSet != null || props.ChartDataSet != undefined) {
    const chardataapi = props.ChartDataSet?.chartDataSet;
    //console.log(chardataapi);
    for (let index = 0; index <= chardataapi.length; index++) {
      //chardataapi[index].label;
      //chardataapi[index].y
      if (
        chardataapi[index]?.label != null &&
        chardataapi[index]?.label != "NA"
      ) {
        x_axis_data.push(chardataapi[index]?.label ?? "NA");
        y_axis_data.push(chardataapi[index]?.y ?? 0);
      }

      // datasets.push({
      //   label: chardataapi[index].label,
      //   y: chardataapi[index].y,
      // });
    }
  }
  const chartdata2 = {
    options: {
      chart: {
        id: "ticketcount",
      },
      xaxis: {
        name: props.ChartDataSet?.x_axis_lable ?? "",
        labels: {
          show: true,
          rotate: -45,
          rotateAlways: false,
        },
        title: {
          text: props.ChartDataSet?.x_axis_lable ?? "",
        },
        categories: x_axis_data,
      },
      yaxis: {
        title: {
          text: props.ChartDataSet?.y_axis_lable ?? "",
        },
      },
    },
    series: [
      {
        name: props.ChartDataSet?.y_axis_lable ?? "",
        data: y_axis_data,
      },
    ],
  };
  let chart_width = 700;
  if (chartdata2.options.xaxis.categories.length > 15) {
    chart_width = chartdata2.options.xaxis.categories.length * 30;
  }
  return (
    <div className="flex h-5/6 overflow-x-auto">
      <ApexChart
        type="line"
        options={chartdata2.options}
        series={chartdata2.series}
        width={chart_width}
        height={520}
      />
    </div>
  );
}
