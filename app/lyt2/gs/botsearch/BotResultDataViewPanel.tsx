'use client'
import { useAppSelectorBotSelector } from '@/lib/Redux/Hooks/BotSearchHooks';
import { selectBotResultData } from '@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors';
import BotResultChartPlotLayout from './component/BotDataResultMapPlotLayout';
import BotListDataUI from './component/BotListDataUI';


const BotResultDataViewPanel: React.FunctionComponent = () => {
const selectbotdata=useAppSelectorBotSelector(selectBotResultData);
  let resultUI = null;
  resultUI = <div></div>;
  if (selectbotdata.botTopIntent.includes("show all")) {
    //dispatch(fetchBotGlobalSearchData(selectbotdata.botShowAllQuery));
    resultUI = (
      // <BotListDataResultLayout searchQuery={selectbotdata.botShowAllQuery} />
      <BotListDataUI/>
    );

  } else {
    resultUI = <BotResultChartPlotLayout />;
  }
  return <>
  {resultUI}
  </>;
};

export default BotResultDataViewPanel;
