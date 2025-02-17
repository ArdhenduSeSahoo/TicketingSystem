import { useAppSelectorBotSelector } from "@/lib/Redux/Hooks/BotSearchHooks";
import { selectBotCharts } from "@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors";
import * as React from "react";
// import BotChartItem from "./BotChartItem";
import { BotChartModel } from "@/lib/Redux/Slices/BotSearchSlices/BotChartSlices";
import BotChartItem from "./BotChartItem";

// export interface IBotChartListUIProps {
// }

export default function BotChartListUI() {
  const selectBotChartList = useAppSelectorBotSelector(selectBotCharts);
  const ChartItems: JSX.Element[] = [];
  if (selectBotChartList.chartList.length > 0) {
    const chartList: BotChartModel[] = [];
    //console.log(chartList);
    const reversedarray = chartList
      .concat(selectBotChartList.chartList)
      .reverse();
    // console.log(selectBotChartList.chartList);
    // console.log(reversedarray);
    reversedarray.forEach((item, index) => {
      ChartItems.push(<BotChartItem botChartItem={item} key={index} />);
    });
  }
  return (
    <>
      <div className="flex flex-col gap-1 overflow-auto border-2 p-1">
        {ChartItems}
      </div>
    </>
  );
}
