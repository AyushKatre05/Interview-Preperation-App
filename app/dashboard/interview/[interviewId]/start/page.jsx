"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import QuestionsSection from './(components)/QuestionsSection';
import RecordAnsSection from './(components)/RecordAnsSection';

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState(null);
  const [activeQuestionIndex,setActiveQuestionIndex] = useState(0)
  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));

      if (result && result[0] && result[0].jsonMockResp) {
        const jsonMockResp = JSON.parse(result[0].jsonMockResp);
        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0]);
      } else {
        console.error('No data found for the given interview ID.');
        // Handle the case where no data is found
      }
    } catch (error) {
      console.error('Error fetching interview details:', error);
      // Handle the error appropriately
    }
  };

  if (!interviewData || !mockInterviewQuestion) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <QuestionsSection activeQuestionIndex={activeQuestionIndex} mockInterviewQuestion={mockInterviewQuestion} />
      <RecordAnsSection/>
    </div>
  );
}

export default StartInterview;
