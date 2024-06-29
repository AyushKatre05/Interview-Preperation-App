// pages/how-it-works.jsx
"use client";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-600 text-white flex flex-col items-center justify-center">
      <main className="w-full flex flex-col items-center justify-center px-6 py-10">
        <h1 className="text-5xl font-extrabold text-white mb-4 text-center">How It Works</h1>
        <p className="text-lg text-white mb-6 text-center max-w-2xl">
          Learn how our AI-powered interview preparation app works and how it can help you ace your interviews.
        </p>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md max-w-4xl">
          <h2 className="text-2xl font-bold mb-2">Step 1: Sign Up</h2>
          <p className="text-lg mb-4">
            Create an account and get started with our free trial to experience the benefits of personalized interview preparation.
          </p>
          <h2 className="text-2xl font-bold mb-2">Step 2: Customize Your Practice</h2>
          <p className="text-lg mb-4">
            Tailor your practice sessions to focus on your specific needs and weaknesses. Our app adapts to your progress.
          </p>
          <h2 className="text-2xl font-bold mb-2">Step 3: Get Feedback</h2>
          <p className="text-lg mb-4">
            Receive detailed feedback from industry experts to help you understand where you went wrong and how to improve.
          </p>
          <h2 className="text-2xl font-bold mb-2">Step 4: Ace Your Interview</h2>
          <p className="text-lg mb-4">
            Use the insights and practice you've gained to confidently tackle your interviews and land your dream job.
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

export default HowItWorks;
