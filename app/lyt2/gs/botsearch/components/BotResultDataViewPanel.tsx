"use client";
import { useAppSelectorBotSelector } from "@/lib/Redux/Hooks/BotSearchHooks";
import { selectBotResultData } from "@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors";
import BotListDataUI from "./BotListDataUI";

import { ApexChart1 } from "./BotApexchart1";
import { BotResultChartDataModel } from "@/lib/Models/BotModels/BotModels";

const BotResultDataViewPanel: React.FunctionComponent = () => {
  const selectbotdata = useAppSelectorBotSelector(selectBotResultData);
  let resultUI = null;
  resultUI = <div>Ask Something.</div>;
  try {
    if (selectbotdata.botTopIntent.includes("show all")) {
      //dispatch(fetchBotGlobalSearchData(selectbotdata.botShowAllQuery));
      resultUI = (
        // <BotListDataResultLayout searchQuery={selectbotdata.botShowAllQuery} />
        <BotListDataUI />
      );
    } //
    else if (selectbotdata.botResultData != null) {
      // resultUI = (
      //   <BotResultChartPlotLayout
      //     ChartDataSet={selectbotdata.botResultData as BotResultChartDataModel}
      //   />
      // );
      resultUI = (
        // <BotLineChart
        //   ChartDataSet={selectbotdata.botResultData as BotResultChartDataModel}
        // />
        // <BotChartJSUI />
        <ApexChart1
          ChartDataSet={selectbotdata.botResultData as BotResultChartDataModel}
        />
      );
    }
  } catch (error) {
    console.log(error);
  }

  return <>{resultUI}</>;
};

export default BotResultDataViewPanel;
