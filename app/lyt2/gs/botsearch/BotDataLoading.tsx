import { useAppSelectorBotSelector } from '@/lib/Redux/Hooks/BotSearchHooks';
import { selectBotCharts, selectBotListData, selectBotResultData } from '@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors';
import * as React from 'react';

export interface IBotDataLoadingProps {
}

export default function BotDataLoading (props: IBotDataLoadingProps) {
    //const selectBotChartList=useAppSelectorBotSelector(selectBotCharts);
    const _selectBotResultData = useAppSelectorBotSelector(selectBotResultData);
    const _selectBotListData = useAppSelectorBotSelector(selectBotListData);
  return (
    <>
      {(_selectBotResultData.isLoading||_selectBotListData.isLoading) ? (
        <div className="flex flex-col items-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <></>
      )}
      {(_selectBotResultData.hasError||_selectBotListData.errorMessage!="") ? (
        <div className="flex flex-col items-center text-red-500 p-2 text-wrap">
          <p className=""> {_selectBotResultData.errorMessage}</p>
        </div>
      ) : (
        <></>
      )
      }
    </>
  );
}
