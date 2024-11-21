"use client";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center lg:h-[90vh]">
      <main className="max-w-3xl w-full px-6 py-10 space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-center">How It Works</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Step 1: Sign Up</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Create an account and start your free trial to explore personalized interview preparation.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Step 2: Customize Your Practice</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Tailor your practice sessions to address your unique needs and track your progress with ease.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Step 3: Get Feedback</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Receive actionable feedback from industry professionals to refine your approach.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Step 4: Ace Your Interview</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Leverage your preparation and confidence to excel in your interviews and achieve your goals.
            </p>
          </div>
        </div>
        <Button 
          onClick={handleBack} 
          className="mt-8 px-6 py-2 border border-gray-700 dark:border-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Back to Home
        </Button>
      </main>
    </div>
  );
};

export default HowItWorks;
