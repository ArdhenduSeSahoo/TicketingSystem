"use client";

import BotResultLayoutManager from "./BotResultLayoutManager";
import BotChartListUI from "./components/BotChartListUI";
import BotDataLoading from "./components/BotDataLoading";
import {
  BotInputQueryUI_Button,
  BotInputQueryUI_Input,
} from "./components/BotInputQueryUI";
import BotResultDataViewPanel from "./components/BotResultDataViewPanel";
import SpeechUI from "./SpeechUiComponent";

// import BotChartListUI from "./BotChartList";
// // import SpeechUI from './SpeechUiComponent';
// import BotDataLoading from "./BotDataLoading";
// import BotResultLayoutManager from "./BotResultLayoutManager";

// import BotResultDataViewPanel from "./BotResultDataViewPanel";

export function BotSearchMainComponent() {
  //const dispatch=useAppDispatchBotSearch();
  //const [inputText, setinputText] = useState("");

  const design4 = (
    <>
      <div className="relative overflow-auto rounded-xl p-1">
        <div className="grid h-screen grid-flow-col grid-cols-8 grid-rows-1 justify-start gap-1 rounded-lg align-top">
          <div className="col-span-2 grid place-content-start justify-stretch rounded-lg border border-slate-800 bg-slate-100 p-1 shadow-lg">
            <div className="flex w-full flex-row justify-between gap-1 rounded-md bg-slate-200 p-1">
              <div className="flex flex-grow">
                <BotInputQueryUI_Input />
              </div>
              <div className="flex flex-row justify-center gap-1">
                <BotInputQueryUI_Button />
                <p className="self-center text-center">OR</p>
                <SpeechUI />
              </div>
            </div>
            <BotDataLoading />
            <BotChartListUI />
          </div>
          <div className="col-span-6 grid justify-start overflow-auto rounded-lg border border-slate-800 bg-white p-1">
            <BotResultLayoutManager />
            <BotResultDataViewPanel />
          </div>
        </div>
      </div>
    </>
  );
  return design4;
}
