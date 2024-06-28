"use client"
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, Loader2Icon, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

const Interview = ({ params }) => {
    const [interviewData, setInterviewData] = useState(null); // Initialize as null or an empty object
    const [webCamEnable, setWebCamEnable] = useState(false);
  
    useEffect(() => {
      console.log(params.interviewId);
      GetInterviewDetails();
    }, []);
  
    const GetInterviewDetails = async () => {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
      setInterviewData(result[0]);
    };
  
    // Check if interviewData is defined before rendering
    if (!interviewData) {
      return <div><Loader2Icon  className="animate-spin flex items-center justify-center"/>Loading ...</div>; // Or any loading indicator you prefer
    }
  
    return (
      <div className="my-10">
        <h2 className="text-4xl m-5 font-bold text-primary">Lets Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col my-5 gap-5">
            <div className="p-5 rounded-lg border">
              <h2 className="text-lg"><strong>Job Position : </strong>{interviewData.jobPosition}</h2>
              <h2 className="text-lg"><strong>Job Description : </strong>{interviewData.jobDesc}</h2>
              <h2 className="text-lg"><strong>Years of Experience : </strong>{interviewData.jobExperience}</h2>
            </div>
            <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-300">
              <h2 className="flex gap-2 items-center text-yellow-500"><Lightbulb/> <strong>Information</strong></h2>
              <h2 className="mt-3 text-yellow-500">Enable Video Cam and Microphone to start your Interview. It Has 5 Questions which you can answer and at the end you will get the report on the basis of your answer. NOTE: We never record your video, Web cam access you can disable at any time if you want </h2>
            </div>
          </div>
          <div>
            {
              webCamEnable ?
              <Webcam style={{height:300,width:300}} mirrored={true} onUserMedia={()=>setWebCamEnable(true)} onUserMediaError={()=>setWebCamEnable(false)}/> :
              <>
                <WebcamIcon className="h-72 w-full my-7 p-10 bg-green-200 rounded-lg"/>
                <Button className="w-full text-green-200" onClick={()=>setWebCamEnable(true)}>Enable Cam And Microphone</Button>
              </>
            }
          </div>
        </div>
        <div className="flex justify-end items-end m-5">
          <Link href={'/dashboard/interview/'+params.interviewId+'/start'}><Button>Start Interview</Button></Link>
        </div>
      </div>
    );
  };
  
  export default Interview