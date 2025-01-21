import { useAppSelectorBotSelector } from '@/lib/Redux/Hooks/BotSearchHooks';
import { selectBotCharts } from '@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors';
import * as React from 'react';
import BotChartItem from './BotChartItem';

export interface IBotChartListUIProps {
}

export default function BotChartListUI (props: IBotChartListUIProps) {
    const selectBotChartList=useAppSelectorBotSelector(selectBotCharts);
    let ChartItems: JSX.Element[] = [];
    if(selectBotChartList.chartList.length>0)
    {
    let reversedarray = [].concat(selectBotChartList.chartList).reverse();
    reversedarray.forEach((item,index)=>{
        ChartItems.push(<BotChartItem botChartItem={item} key={index}/>);
    })
    }
  return (
    <>
      <div className="flex flex-col gap-1 overflow-auto border-2 p-1">
        
        {ChartItems}
      </div>
    </>
  );
}
