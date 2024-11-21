"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

const Interview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    const fetchInterviewDetails = async () => {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
      setInterviewData(result[0]);
    };
    fetchInterviewDetails();
  }, [params.interviewId]);

  if (!interviewData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Lets Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="p-4 border rounded bg-white dark:bg-gray-800">
            <p><strong>Job Position:</strong> {interviewData.jobPosition}</p>
            <p><strong>Description:</strong> {interviewData.jobDesc}</p>
            <p><strong>Experience:</strong> {interviewData.jobExperience} years</p>
          </div>
          <div className="p-4 border rounded bg-yellow-100 dark:bg-yellow-300">
            <h2 className="flex items-center gap-2 text-yellow-600 dark:text-yellow-800">
              <Lightbulb /> <strong>Information</strong>
            </h2>
            <p className="text-sm mt-2 text-yellow-600 dark:text-yellow-800">
              Enable your webcam and microphone to start the interview. There are 5 questions, and you will receive a report based on your answers. Note: We do not record your video.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {webCamEnabled ? (
            <Webcam style={{ height: 300, width: 300 }} />
          ) : (
            <>
              <div className="h-72 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded mb-4">
                <p>Webcam Preview</p>
              </div>
              <Button
                onClick={() => setWebCamEnabled(true)}
                className="bg-blue-500 hover:bg-blue-400 text-white"
              >
                Enable Webcam
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="mt-6 text-right">
        <Link href={`/dashboard/interview/${params.interviewId}/start`}>
          <Button className="bg-green-500 hover:bg-green-400 text-white">
            Start Interview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Interview;
