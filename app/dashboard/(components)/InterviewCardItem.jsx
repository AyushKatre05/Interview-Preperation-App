import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const InterviewCardItem = ({ interview }) => {
  const router = useRouter();

  const onStart = () => {
    router.push('/dashboard/interview/' + interview?.mockId);
  };

  const onFeedback = () => {
    router.push('/dashboard/interview/' + interview?.mockId + '/feedback');
  };

  return (
    <div className='border shadow-sm rounded-lg p-3 bg-white dark:bg-gray-800 dark:border-gray-700'>
      <h2 className='font-bold text-primary dark:text-white'>{interview?.jobPosition}</h2>
      <h2 className='text-gray-700 text-sm dark:text-gray-300'>
        Year Of Experience: {interview?.jobExperience}
      </h2>
      <h2 className='text-xs text-gray-500 dark:text-gray-400'>
        Created At: {interview.createdAt}
      </h2>
      <div className='flex justify-between my-2'>
        <Button
          onClick={onFeedback}
          size="sm"
          variant="outline"
          className="w-full dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Feedback
        </Button>
        <Button
          onClick={onStart}
          size="sm"
          className="w-full dark:text-gray-200 dark:bg-primary dark:hover:bg-primary-dark"
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default InterviewCardItem;
