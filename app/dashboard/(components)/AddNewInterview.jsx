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
  
const AddNewInterview = () => {
    const [openDialog,setOpenDialog] = useState(false)
  return (
    <div>
    <div onClick={()=>setOpenDialog(true)} className='p-10 border rounded-lg transition-all bg-green-200 cursor-pointer hover:scale-105 hover:shadow-md'>
    <h2 className='text-lg text-center'>+Add New</h2>        
    </div>
    <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        Want to Start Your Interview
        <div className='flex justify-end gap-5 '>
        <Button variant="destructive" onClick={()=>setOpenDialog(false)}>Cancel</Button>
          <Button>Start Interview</Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview