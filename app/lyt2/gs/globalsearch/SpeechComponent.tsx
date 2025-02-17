// "use client";
// import React from 'react';

// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// // export interface ISpeechComponentProps {
// // }

// export default function SpeechComponent () {
//     const {
//         transcript,
//         listening,
//         resetTranscript,
//         browserSupportsSpeechRecognition
//       } = useSpeechRecognition();

//       if (!browserSupportsSpeechRecognition) {
//         return <span>Browser doesnt support speech recognition.</span>;
//       }

//       return (
//         <div>
//           <p>Microphone: {listening ? 'on' : 'off'}</p>
//           <button onClick={SpeechRecognition.startListening}>Start</button>
//       <button onClick={SpeechRecognition.stopListening}>Stop</button>
//       <button onClick={resetTranscript}>Reset</button>
//           <p>{transcript}</p>
//         </div>
//       );
// }
