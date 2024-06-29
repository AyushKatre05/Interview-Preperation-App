"use client"
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
  

const Feedback = ({params}) => {
    const [feedbackList,setFeedbackList] = useState([])
    useEffect(()=>{
        GetFeedback();
    })
    const router = useRouter();
    const GetFeedback =async()=>{
        const result = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef,params.interviewId)).orderBy(UserAnswer.id)
        setFeedbackList(result)
    }
  return (
    <div className='p-10'>
        <h2 className='text-3xl font-bold text-primary'>Your Feedback</h2>

        {feedbackList?.length==0?<h2 className='font-bold text-xl text-gray-500'>No Interview Feedback</h2>:<>
        <h2 className='text-2xl font-bold'>Your Overall interview rating: <strong></strong> </h2>
        <h2 className='text-sm text-gray-500'>Find Below interview question with correct answer , Your answer and feedback for improvement</h2>
        {feedbackList&&feedbackList.map((item,index)=>(
            <Collapsible key={index} className='mt-7'>
  <CollapsibleTrigger className='p-2 flex justify-between bg-secondary rounded-lg my-2 text-left gap-7 w-full'>{item.question}<ChevronsUpDown className='h-7 w-7'/></CollapsibleTrigger>
  <CollapsibleContent>
    <div className='flex flex-col gap-2'>
        <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating:</strong>{item.rating}</h2>
        <h2 className='p-2 text-red-900 border rounded-lg text-sm bg-red-50'><strong>Your Answer: </strong>{item.userAns}</h2>
        <h2 className='p-2 text-green-900 border rounded-lg text-sm bg-red-50'><strong>Correct Answer: </strong>{item.correctAns}</h2>
        <h2 className='p-2 text-blue-900 border rounded-lg text-sm bg-red-50'><strong>Feedback: </strong>{item.feedback}</h2>
    </div>
  </CollapsibleContent>
</Collapsible>
        ))}
</>}

        <Button onClick={()=>router.replace('/dashboard')}>Go Home</Button>
    </div>
  )
}

export default Feedback