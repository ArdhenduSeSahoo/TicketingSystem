'use client'
import { useAppSelectorBotSelector } from '@/lib/Redux/Hooks/BotSearchHooks';
import { selectBotResultData } from '@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors';
import BotResultChartPlotLayout from './component/BotDataResultMapPlotLayout';
import BotListDataUI from './component/BotListDataUI';
import { BotResultChartDataModel } from "@/lib/Models/BotModels/BotModels";
import BotLineChart from "./component/BotLineChart";

const BotResultDataViewPanel: React.FunctionComponent = () => {
  const selectbotdata = useAppSelectorBotSelector(selectBotResultData);
  let resultUI = null;
  resultUI = <div></div>;
  try {
    if (selectbotdata.botTopIntent.includes("show all")) {
      //dispatch(fetchBotGlobalSearchData(selectbotdata.botShowAllQuery));
      resultUI = (
        // <BotListDataResultLayout searchQuery={selectbotdata.botShowAllQuery} />
        <BotListDataUI />
      );
    } //if (selectbotdata.botResultData != null)
    else {
      resultUI = (
        <BotResultChartPlotLayout
          ChartDataSet={selectbotdata.botResultData as BotResultChartDataModel}
        />
      );
      // resultUI = (
      //   <BotLineChart
      //     ChartDataSet={selectbotdata.botResultData as BotResultChartDataModel}
      //   />
      // );
    }
  } catch (error) {
    console.log(error);
  }

  return <>{resultUI}</>;
};

export default BotResultDataViewPanel;
