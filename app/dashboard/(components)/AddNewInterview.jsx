"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/AIModal'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import {v4 as uuidv4} from "uuid"
import { useUser } from '@clerk/nextjs'
import moment from 'moment/moment'
import { useRouter } from 'next/navigation'
  
const AddNewInterview = () => {
    const [openDialog,setOpenDialog] = useState(false)
    const [jobPosition,setJobPosition] = useState();
    const [jobDesc,setJobDesc] = useState();
    const [jobExperience,setJobExperience] = useState();
    const [loading,setLoading] = useState(false);
    const [jsonResponse,setJsonResponse] = useState({});
    const {user} = useUser()
    const router =useRouter();
    const onSubmit=async(e)=>{
      setLoading(true)
      e.preventDefault();
      const InputPrompt = 'Job Position : '+ jobPosition+ 'Job Description: '+jobDesc+' Years of Experience:'+jobExperience+',Depends on this information please give me '+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+' interview questions with answers in Json Format . give question and answer as field in json'
      const result = await chatSession.sendMessage(InputPrompt)
      const MockJsonResp = (result.response.text()).replace('```json','').replace('```','')
      console.log(JSON.parse(MockJsonResp));
      setJsonResponse(MockJsonResp);
      if(MockJsonResp){
        const resp = await db.insert(MockInterview).values({
          mockId: uuidv4(),
          jsonMockResp:MockJsonResp,
          jobPosition:jobPosition,
          jobDesc:jobDesc,
          jobExperience:jobExperience,
          createdBy:user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-yyyy')
  
        }).returning({mockId:MockInterview.mockId})
        console.log(resp)
        if(resp){
          setOpenDialog(false)
          router.push('/dashboard/interview/'+resp[0]?.mockId)
        }
      }
      setLoading(false)
    }
  return (
    <div>
    <div onClick={()=>setOpenDialog(true)} className='p-10 border rounded-lg transition-all bg-green-200 cursor-pointer hover:scale-105 hover:shadow-md'>
    <h2 className='text-lg text-center dark:text-black'>+Add New</h2>        
    </div>
    <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
      <form action="" onSubmit={onSubmit}>
        <div>
          <h2>Add Details about your Job role</h2>
          <div className='mt-7 my-3'>
            <label htmlFor="">Job Role</label>
            <Input onChange={(e)=>setJobPosition(e.target.value)} required placeholder="Ex. Web Developer"/>
          </div>
          <div className='my-3'>
            <label htmlFor="">Tech Stacks</label>
            <Textarea onChange={(e)=>setJobDesc(e.target.value)} required placeholder="Ex. React, Angular, MySQL, Nextjs "/>
          </div>
          <div className='my-3'>
            <label htmlFor="">Years Of Experience</label>
            <Input onChange={(e)=>setJobExperience(e.target.value)} required type="number" max="60" placeholder="Ex. 2"/>
          </div>
        </div>
        <div className='flex justify-end gap-5 '>
        <Button type="button" variant="destructive" onClick={()=>setOpenDialog(false)}>Cancel</Button>
          <Button type="submit" disabled={loading} >{loading?<><LoaderCircle className="animate-spin"/>Generating From AI</>:'Start Interview'}</Button>
        </div></form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview