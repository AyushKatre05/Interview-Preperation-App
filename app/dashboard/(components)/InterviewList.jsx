"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import { intersect } from 'drizzle-orm/pg-core';
import React, { useEffect, useState } from 'react'
import InterviewCardItem from './InterviewCardItem';

const InterviewList = () => {

    const {user} = useUser();
    const [interviewList,setInterviewList] = useState([])

    useEffect(()=>{
        user && GetInterviewList();
    },[user])

    const GetInterviewList = async()=>{
        const result = await db.select().from(MockInterview).where(eq(MockInterview.createdBy,user?.primaryEmailAddress?.emailAddress)).orderBy(desc(MockInterview.id))
        setInterviewList(result)
        }

  return (
    <div>
        <h2 className='font-medium text-xl'>Previous Interview</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
            {interviewList&&interviewList.map((interview,index)=>(
                <InterviewCardItem interview={interview} key={index}/>)
            )}
        </div>
    </div>
  )
}

export default InterviewList