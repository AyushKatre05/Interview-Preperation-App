"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/AIModal";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const RecordAnsSection = ({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const {
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) => setUserAnswer((prev) => prev + result?.transcript));
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const UpdateUserAnswer = async () => {
    console.log(userAnswer);
    setLoading(true);
    console.log("Updating user answer");
    const feedbackPrompt =
      "Question : " +
      mockInterviewQuestion[activeQuestionIndex]?.question +
      ", User Answer" +
      userAnswer +
      ", Depends on questions and user answer for given interview question" +
      " Please give us rating for answer and feedback as area of improvement if any" +
      " in just 3-5 lines to improve it in JSON format with rating field and feedback field";
    const result = await chatSession.sendMessage(feedbackPrompt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(MockJsonResp);
    const JsonFeedbackResponse = JSON.parse(MockJsonResp);
    const resp = await db.insert(UserAnswer).values({
      mockIdRef: interviewData?.mockId,
      question: mockInterviewQuestion[activeQuestionIndex]?.question,
      correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns: userAnswer,
      feedback: JsonFeedbackResponse?.feedback,
      rating: JsonFeedbackResponse?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-yyyy"),
    });
    if (resp) {
      toast("User Answer Recorded Successfully");
      setResults([]);
    }
    setResults([]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-5">
      <div className="flex flex-col justify-center items-center bg-green-200 dark:bg-green-600 rounded-lg p-5 my-10">
        <Image
          src={"/cam.png"}
          alt="logo"
          width={200}
          height={200}
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="my-10 border-gray-700 text-black dark:border-gray-300 dark:text-white"
        onClick={isRecording ? stopSpeechToText : startSpeechToText}
      >
        {isRecording ? (
          <h2 className="text-red-500 animate-pulse flex gap-2 items-center">
            <StopCircle />
            Stop Recording
          </h2>
        ) : (
          <h2 className="text-primary dark:text-white flex gap-2 items-center">
            <Mic />
            Record Answer
          </h2>
        )}
      </Button>
    </div>
  );
};

export default RecordAnsSection;
