"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from "lucide-react";

const RecordAnsSection = () => {
    const [userAnswer,setUserAnswer] = useState('');
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });
      useEffect(()=>{
        results.map((result)=>(
            setUserAnswer(e=>e+result?.transcript)
        ))
      },[results])
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center bg-green-200 rounded-lg p-5 my-10 ">
        <Image src={"/cam.png"} width={200} height={200} className="absolute" />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <Button varient="outline" className="my-10" onClick={isRecording?stopSpeechToText:startSpeechToText}>
      {isRecording?<h2 className="text-red-500 flex gap-2"><Mic/>Stop Recording</h2>:
      'Record Answer'}</Button>
    <Button onClick={()=>console.log(userAnswer)}>Show Answer</Button>
    </div>
  );
};

export default RecordAnsSection;
