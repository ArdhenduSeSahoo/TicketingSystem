"use client";


export interface ISpeechComp2Props {
}

export default function SpeechComp2 (props: ISpeechComp2Props) {

    function btn_click()
    {
        console.log("Starting recording object.");
        
        const speechRco= window.SpeechRecognition||window.webkitSpeechRecognition
        const recoObject=new speechRco();
        recoObject.onresult=async function (events) {
            console.log(events);
        }
    }
  return (
    <div>
    {/* <button onClick={btn_click}>Start Recording</button> */}
    </div>
  );
}
