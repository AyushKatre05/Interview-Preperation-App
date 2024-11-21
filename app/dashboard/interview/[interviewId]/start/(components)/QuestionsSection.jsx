import { Volume1 } from 'lucide-react';
import React from 'react';

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Your browser does not support text-to-speech');
    }
  };

  return (
    <div className="p-4 border rounded-lg space-y-4 bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {mockInterviewQuestion?.map((_, index) => (
          <div
            key={index}
            className={`p-2 rounded-full text-center text-xs md:text-sm cursor-pointer ${
              activeQuestionIndex === index
                ? 'bg-black text-white dark:bg-gray-300 dark:text-black'
                : 'bg-gray-200 dark:bg-gray-600 dark:text-gray-300'
            }`}
          >
            Question {index + 1}
          </div>
        ))}
      </div>
      <h2 className="text-lg font-medium">{mockInterviewQuestion?.[activeQuestionIndex]?.question}</h2>
      <Volume1
        className="cursor-pointer text-gray-600 dark:text-gray-300"
        onClick={() => textToSpeech(mockInterviewQuestion?.[activeQuestionIndex]?.question)}
      />
      <div className="border rounded-lg p-4 bg-gray-100 dark:bg-gray-700">
        <h2 className="text-sm text-gray-600 dark:text-gray-400">
          Record your answers to each question. At the end of the interview, you will receive feedback, including correct answers and comparisons with your responses.
        </h2>
      </div>
    </div>
  );
};

export default QuestionsSection;
