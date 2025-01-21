'use client'
import BotChartListUI from './BotChartList';
import SpeechUI from './SpeechUiComponent';
import BotDataLoading from './BotDataLoading';
import BotResultLayoutManager from './BotResultLayoutManager';
import { BotInputQueryUI_Button, BotInputQueryUI_Input } from './component/BotInputQueryUI';
import BotResultDataViewPanel from './BotResultDataViewPanel';

export interface IBotSearchMainComponentProps {
}

export function BotSearchMainComponent (props: IBotSearchMainComponentProps) {
    //const dispatch=useAppDispatchBotSearch();
    //const [inputText, setinputText] = useState("");
    
    const design4 = (
      <>
        <div className="relative overflow-auto rounded-xl p-1">
          <div className="grid h-screen grid-flow-col grid-cols-8 grid-rows-1 justify-start gap-1 rounded-lg align-top">
            <div className="col-span-2 grid place-content-start justify-stretch rounded-lg border border-slate-800 bg-slate-100 p-1 shadow-lg">
              <div className="flex w-full flex-row justify-between rounded-md bg-slate-200 p-1">
                <div className="flex flex-grow">
                  <BotInputQueryUI_Input/>
                </div>
                <div className="flex flex-row justify-center gap-1">
                  <BotInputQueryUI_Button/>
                  <p className="self-center text-center">OR</p>
                  <SpeechUI />
                </div>
              </div>
              <BotDataLoading/>
              <BotChartListUI />
            </div>
            <div className="col-span-6 grid justify-start rounded-lg border border-slate-800 bg-white p-1 overflow-auto">
              <BotResultLayoutManager/>
              <BotResultDataViewPanel/>
            </div>
          </div>
        </div>
      </>
    );
  return design4;
}
