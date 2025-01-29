"use client";
import { useAppSelectorBotSelector } from "@/lib/Redux/Hooks/BotSearchHooks";
import { selectBotListData } from "@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors";
import * as React from "react";
import SearchItem from "../../globalsearch/SearchItem";
import BotDataNotFoundUI from "./DataNotFound";
//import { setBotQueryDataLoading } from '@/lib/Redux/Slices/BotSearchSlices/BotChartSlices';

export default function BotListDataUI() {
  //const dispatch=useAppDispatchBotSearch();
  const selectbotdata = useAppSelectorBotSelector(selectBotListData);
  let dataItems: JSX.Element[] = [];
  //dispatch(setBotQueryDataLoading({isLoading:false,errorMessage:""}));
  selectbotdata.searchData.forEach((itm, index) => {
    dataItems.push(<SearchItem key={index} dataItem={itm}></SearchItem>);
  });
  if (dataItems.length <= 0 && !selectbotdata.isLoading) {
    dataItems = [];
    dataItems.push(<>Data not found</>);
  }
  if (dataItems.length <= 0 && !selectbotdata.isLoading) {
    dataItems = [];
    dataItems.push(<BotDataNotFoundUI />);
  }

  //console.log(selectbotdata.searchData.length);
  return (
    <>
      <div className="flex flex-col items-center bg-white px-1">
        <ul className="flex flex-col gap-2 pt-10">{dataItems}</ul>
      </div>
    </>
  );
}
