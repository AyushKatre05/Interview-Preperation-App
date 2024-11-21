"use client";
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Feedback = ({ params }) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    setFeedbackList(result);
    console.log("Params:", params.interviewId);
    console.log(result);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 text-black dark:text-white">
      <h2 className="text-2xl font-semibold mb-4">Your Feedback</h2>
      {feedbackList.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No interview feedback available.</p>
      ) : (
        <div className="space-y-6">
          <p className="text-lg font-medium">Overall Interview Rating: <strong>-</strong></p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Below are the interview questions, your answers, and feedback for improvement.
          </p>
          {feedbackList.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
              <p className="font-medium">{item.question}</p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Rating:</strong> {item.rating}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Your Answer:</strong> {item.userAns}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Correct Answer:</strong> {item.correctAns}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Feedback:</strong> {item.feedback}
              </p>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => router.replace('/dashboard')}
        className="mt-6 px-4 py-2 border border-black rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
      >
        Go Home
      </button>
    </div>
  );
};

export default Feedback;
