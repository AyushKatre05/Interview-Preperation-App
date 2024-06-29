"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import QuestionsSection from './(components)/QuestionsSection';
import RecordAnsSection from './(components)/RecordAnsSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState(null);
  const [activeQuestionIndex,setActiveQuestionIndex] = useState(0)
  useEffect(() => {
    GetInterviewDetails();
  });

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
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <QuestionsSection activeQuestionIndex={activeQuestionIndex} mockInterviewQuestion={mockInterviewQuestion} />
      <RecordAnsSection activeQuestionIndex={activeQuestionIndex} mockInterviewQuestion={mockInterviewQuestion} interviewData={interviewData}/>
    </div>
    <div className='flex justify-end gap-6'>
    {activeQuestionIndex>0 && <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>}
    {activeQuestionIndex!=mockInterviewQuestion?.length-1 && <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
    {activeQuestionIndex==mockInterviewQuestion?.length-1 &&  <Link href={'/dashboard/interview/'+interviewData?.mockId+'/feedback'}><Button className="bg-red-500 hover:bg-red-400">End Interview</Button></Link>}
    </div>
    </div>
  );
}

export default StartInterview;
