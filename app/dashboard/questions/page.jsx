// pages/questions.jsx
"use client";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Questions = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-teal-600 text-white flex flex-col items-center justify-center">
      <main className="w-full flex flex-col items-center justify-center px-6 py-10">
        <h1 className="text-5xl font-extrabold text-white mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-white mb-6 text-center max-w-2xl">
          Have questions? We have answers. Check out some of the most commonly asked questions about our app.
        </p>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md max-w-4xl">
          <h2 className="text-2xl font-bold mb-2">How does the app work?</h2>
          <p className="text-lg mb-4">
            Our app uses advanced AI to provide personalized practice questions and expert feedback to help you prepare for your interviews.
          </p>
          <h2 className="text-2xl font-bold mb-2">Is there a free trial?</h2>
          <p className="text-lg mb-4">
            Yes, we offer a free trial so you can experience the benefits of our app before committing to a subscription.
          </p>
          <h2 className="text-2xl font-bold mb-2">Can I cancel my subscription?</h2>
          <p className="text-lg mb-4">
            Yes, you can cancel your subscription at any time. If you are not satisfied, we are here to help.
          </p>
        </div>
        <Button 
          onClick={handleBack} 
          className="mt-4 px-8 py-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 shadow-lg"
        >
          Back to Home
        </Button>
      </main>
    </div>
  );
};

export default Questions;
