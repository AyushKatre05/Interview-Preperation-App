import { MockInterview } from '@/utils/schema'
import { Lightbulb, Volume1 } from 'lucide-react'
import React from 'react'

const QuestionsSection = ({mockInterviewQuestion,activeQuestionIndex}) => {
  const textToSpeech = (text)=>{
    if('speechSynthesis' in window){
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech) 
    }
    else{
      alert('Your Browser does not supports the text-to-speech')
    }
  }
  return (
    <div className='p-5 border rounded-lg'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockInterviewQuestion && mockInterviewQuestion.map((question,index)=>(
            <h2 key={question} className={`p-2 bg-green-200 rounded-full cursor-pointer text-xs md:text-sm text-center ${activeQuestionIndex==index && 'bg-primary text-white'}`}>Question {index+1}</h2>
        ))}
        </div>
        <h2 className='my-5 text-md md:text-lg'>
          {mockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <Volume1 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}/>
        <div className='border rounded-lg p-5 bg-yellow-100 my-10'>
          <h2 className='flex gap-2 items-center text-yellow-500'>
            <Lightbulb/>
            <strong>NOTE</strong>
          </h2>
          <h2 className='text-sm text-yellow-500 my-2'>Click on record Answer when you want to answer a question . At the end of interview we will give you uthe feedback along with correct answer for each of the question and your answer to compare it.  </h2>
        </div>
    </div>
  )
}

export default QuestionsSection