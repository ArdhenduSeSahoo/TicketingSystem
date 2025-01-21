'use client'
import { useAppDispatchBotSearch, useAppSelectorBotSelector } from '@/lib/Redux/Hooks/BotSearchHooks';
import { addChartToList, setBotQuery, setBotQueryDataLoading } from '@/lib/Redux/Slices/BotSearchSlices/BotChartSlices';
import { fetchDataFromQuery } from '@/lib/Redux/Slices/BotSearchSlices/BotResultSlice';
import Image from "next/image";
import { selectBotCharts } from '@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors';


export interface IBotInputQueryUIProps {
}

export function BotInputQueryUI_Input () {
    const dispatch=useAppDispatchBotSearch();
        const selectBotChartList=useAppSelectorBotSelector(selectBotCharts);
        function onInputChange(e)
        {
          //setinputText(e.target.value);
          dispatch(setBotQuery(e.target.value));
        }
    
  return (
    <>
      
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent h-9 w-full max-w-xs"
            onChange={onInputChange}
            value={selectBotChartList.botQuery}
          />
       
    </>
  );
}

export function BotInputQueryUI_Button() {
  const dispatch = useAppDispatchBotSearch();
  //const [inputText, setinputText] = useState("");
  const selectBotChartList = useAppSelectorBotSelector(selectBotCharts);
  function btn_click() {
    if(selectBotChartList.botQuery!=='')
    {
      dispatch(addChartToList({ chartText: selectBotChartList.botQuery, chartType: "user" }));
      dispatch(fetchDataFromQuery(selectBotChartList.botQuery));
      //dispatch(setBotQueryDataLoading(true));
    }
  }

  return (
    <>
          <div className="self-center" onClick={btn_click}>
            <Image
              alt="no data"
              src={"/images/search.png"}
              height={35}
              width={35}
              className="rounded-md bg-slate-300 p-1"
            />
          </div>
    </>
  );
}
