"use client";
import { BotResultChartDataModel } from "@/lib/Models/BotModels/BotModels";
import ReactApexChart from "react-apexcharts";

export interface IBotLineChartProps {
  ChartDataSet: BotResultChartDataModel;
}

export default function BotLineChart(props: IBotLineChartProps) {
  const x_axis_data: string[] = [];
  const y_axis_data: number[] = [];
  if (props.ChartDataSet != null || props.ChartDataSet != undefined) {
    const chardataapi = props.ChartDataSet?.chartDataSet;
    for (let index = 0; index <= chardataapi.length; index++) {
      //chardataapi[index].label;
      //chardataapi[index].y
      x_axis_data.push(chardataapi[index]?.label ?? "NA");
      y_axis_data.push(chardataapi[index]?.y ?? 0);
      // datasets.push({
      //   label: chardataapi[index].label,
      //   y: chardataapi[index].y,
      // });
    }
  }

  //   options: {
  //     chart: {
  //       id: "apexchart-example",
  //     },
  //     xaxis: {
  //       categories: [
  //         "NA",
  //         "Netherlands",
  //         "Uruguay",
  //         "Philippines",
  //         "India",
  //         "USA",
  //         "South Korea",
  //         "Panama",
  //         "Spain",
  //         "Oman",
  //         "Jordan",
  //         "Egypt",
  //         "Finland",
  //         "Thailand",
  //         "Colombia",
  //         "Bahrain",
  //         "Hungary",
  //         "Nigeria",
  //         "China",
  //         "Australia",
  //         "Morocco",
  //         "Singapore",
  //         "Hong Kong",
  //         "Japan",
  //         "Taiwan",
  //         "Bangladesh",
  //         "Turkey",
  //         "Germany",
  //         "Greece",
  //         "Ireland",
  //         "South Africa",
  //         "Great Britain",
  //         "France",
  //         "Denmark",
  //         "Pakistan",
  //         "Tanzania",
  //         "Kenya",
  //         "Malaysia",
  //         "Italy",
  //         "Sri Lanka",
  //         "Saudi Arabia",
  //         "Myanmar",
  //         "Guatemala",
  //         "Tunisia",
  //         "Sweden",
  //         "Brazil",
  //         "Chile",
  //         "Ghana",
  //         "Peru",
  //         "Costa Rica",
  //         "Mexico",
  //         "Polar Mexico",
  //         "Congo",
  //         "Togo",
  //         "Argentina",
  //         "New Zealand",
  //         "Cambodia",
  //         "Indonesia",
  //         "Poland",
  //         "Cameroon",
  //         "Angola",
  //         "Belgium",
  //         "United Arab Emirates",
  //         "Senegal",
  //         "Georgia",
  //         "Israel",
  //         "Guinea",
  //         "Mauritania",
  //         "Benin",
  //         "Canada",
  //         "Vietnam",
  //         "Romania",
  //         "Croatia",
  //         "Kuwait",
  //         "LUNA MAERSK",
  //         "Norway",
  //         "Portugal",
  //         "Dominican Republic",
  //         "Burkina Faso",
  //         "Democratic Republic of Congo",
  //         "Niger",
  //         "Venezuela",
  //         "Liberia",
  //         "Ivory Coast",
  //         "Switzerland",
  //         "Slovenia",
  //         "Maersk Utah",
  //         "Uganda",
  //         "Cape Verde",
  //         "Namibia",
  //         "Ukraine",
  //         "Sierra Leone",
  //         "Ecuador",
  //         "Latvia",
  //         "MOZAMBIQUE",
  //         "Gambia",
  //         "Algeria",
  //         "Somalia",
  //         "Mauritius",
  //         "Paraguay",
  //         "Gunde Maersk",
  //         "Maersk Vilnius",
  //         "Djibouti",
  //         "Maersk Labrea",
  //         "Madagascar",
  //         "Czech Republic",
  //         "Vaga Maersk",
  //         "Nexoe Maersk",
  //         "Maersk Singapore",
  //         "Nicaragua",
  //         "Bulgaria",
  //         "Slovakia",
  //         "Maersk Varna",
  //       ],
  //     },
  //   },
  //   series: [
  //     {
  //       name: "series-1",
  //       data: [
  //         113, 146, 5, 623, 2702, 511, 52, 73, 287, 9, 15, 61, 7, 48, 56, 24,
  //         10, 49, 874, 44, 107, 60, 34, 49, 23, 30, 40, 113, 13, 16, 94, 165,
  //         14, 277, 43, 23, 43, 140, 53, 13, 28, 26, 33, 5, 65, 279, 79, 28, 106,
  //         40, 209, 1, 13, 5, 28, 16, 21, 37, 30, 44, 13, 23, 29, 12, 16, 10, 19,
  //         5, 9, 39, 120, 5, 14, 11, 1, 8, 9, 2, 1, 7, 1, 2, 11, 20, 5, 5, 1, 3,
  //         1, 4, 5, 2, 9, 1, 1, 1, 1, 1, 3, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2,
  //         1, 1,
  //       ],
  //     },
  //   ],
  // };
  const chartdata2 = {
    options: {
      chart: {
        id: "ticketcount",
      },
      xaxis: {
        name: props.ChartDataSet?.x_axis_lable ?? "",
        categories: x_axis_data,
      },
    },
    series: [
      {
        name: props.ChartDataSet?.y_axis_lable ?? "",
        data: y_axis_data,
      },
    ],
  };

  return (
    <div>
      <ReactApexChart
        options={chartdata2.options}
        series={chartdata2.series}
        type="line"
        width={chartdata2.options.xaxis.categories.length * 30}
        height={520}
      />
    </div>
  );
}
