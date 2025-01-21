"use client";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useAppDispatchBotSearch } from "@/lib/Redux/Hooks/BotSearchHooks";
import { addChartToList } from "@/lib/Redux/Slices/BotSearchSlices/BotChartSlices";
interface ISpeechUIProps {}

const SpeechUI: React.FunctionComponent<ISpeechUIProps> = (props) => {
    const dispatch=useAppDispatchBotSearch();
  const [isListening, setIsListening] = useState(false);
  const speechConfig = useRef(sdk.SpeechConfig);
  const audioConfig = useRef(null);
  const recognizer = useRef(null);
  const [myTranscript, setMyTranscript] = useState("");
  const [recognizingTranscript, setRecTranscript] = useState("");

  function handelDebounceDispatch( textfromspeech:string)
  {
    console.log(textfromspeech);
    if (textfromspeech !== "") {
      dispatch(addChartToList({ chartText: textfromspeech, chartType: "user" }));
    }
  }

  const debouncedResults = debounce(handelDebounceDispatch, 500);

  useEffect(() => { 
    speechConfig.current = sdk.SpeechConfig.fromSubscription(
      "8Dcm5n747PO1LUU5AAAP8tU1SL0MLETlfN5Y8gVytxYjtuP6JPabJQQJ99BAACGhslBXJ3w3AAAYACOGTsht",
      "centralindia",
    );
    speechConfig.current.speechRecognitionLanguage = "en-US";

    audioConfig.current = sdk.AudioConfig.fromDefaultMicrophoneInput();
    recognizer.current = new sdk.SpeechRecognizer(
      speechConfig.current,
      audioConfig.current,
    );

    const processRecognizedTranscript = (event) => {
      const result = event.result;
      console.log("Recognition result:", result);

      if (result.reason === sdk.ResultReason.RecognizedSpeech) {
        const transcript = result.text;
        console.log("Transcripted: -->", transcript);
        // Call a function to process the transcript as needed

        //setMyTranscript(transcript);
        //debounce(handelDebounceDispatch, 800);
        //debouncedResults();
        handelDebounceDispatch(transcript);
      }
    };
    const processRecognizingTranscript = (event) => {
      const result = event.result;
      console.log("Recognition result:", result);
      if (result.reason === sdk.ResultReason.RecognizingSpeech) {
        const transcript = result.text;
        console.log("Transcript: -->", transcript);
        // Call a function to process the transcript as needed

        setRecTranscript(transcript);
      }
    };
    recognizer.current.recognized = (s, e) => processRecognizedTranscript(e);
    //recognizer.current.recognizing = (s, e) => processRecognizingTranscript(e);
    // recognizer.current.startContinuousRecognitionAsync(() => {
    //   console.log("Speech recognition started.");
    //   setIsListening(true);
    // });

    return () => {
      recognizer.current.stopContinuousRecognitionAsync(() => {
        setIsListening(false);
      });
    };
  }, []);
  function btn_click() {
    if(isListening)
    {
        recognizer.current.stopContinuousRecognitionAsync(() => {
          console.log("Speech recognition stopped.");
        });
    }
    else
    {
         recognizer.current.startContinuousRecognitionAsync(() => {
           console.log("Resumed listening...");
         });
    }
    setIsListening(!isListening);

    // navigator.mediaDevices
    //   .getUserMedia({ video: false, audio: true })
    //   .catch((err) => {
    //     console.error(`you got an error: ${err}`);
    //   });
  }
  return (
    <>
      <div className="flex self-center w-9"> 
        <div className="" onClick={btn_click}>
          {isListening ? (
            <Image
              alt="no data"
              src={"/images/mic_on.png"}
              height={35}
              width={35}
              className="object-cover"
            />
          ) : (
            <Image
              alt="no data"
              src={"/images/mic_off.png"}
              height={35}
              width={35}
              className="object-cover"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SpeechUI;
