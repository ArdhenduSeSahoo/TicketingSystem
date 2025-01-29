'use client'
import { selectBotResultData } from '@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors';

import { useAppSelectorBotSelector } from "@/lib/Redux/Hooks/BotSearchHooks";

import { useEffect } from "react";

export default function BotResultLayoutManager() {
  // const dispatch=useAppDispatchBotSearch();
  //const selectbotdata = useAppSelectorBotSelector(selectBotResultData);
  useEffect(() => {
    // if (
    //   selectbotdata?.botTopIntent?.includes("show all") &&
    //   selectbotdata?.botShowAllQuery !== "" &&
    //   selectbotdata?.hasError == false
    // ) {
    //   //dispatch(fetchBotGlobalSearchData(selectbotdata.botShowAllQuery));
    //   //<BotListDataResultLayout searchQuery={selectbotdata.botShowAllQuery} />
    //   //console.log("Calling list data ui");
    // }
    //  console.log("bot layout--"+selectbotdata.errorMessage);
    //  console.log("bot layout--" + selectbotdata.hasError);
    //  else if(selectbotdata.)
    //  else{
    //     dispatch(setBotQueryDataLoading({isLoading:false,errorMessage:""}));
    //  }
  });

  return <></>;
}
