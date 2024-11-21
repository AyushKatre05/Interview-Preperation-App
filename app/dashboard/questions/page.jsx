"use client";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Questions = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center lg:h-[90vh]">
      <main className="w-full flex flex-col items-center justify-center px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
        <div className="max-w-2xl w-full space-y-6">
          <div>
            <h2 className="text-xl font-semibold">How does the app work?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our app uses AI to provide personalized practice questions and expert feedback to help you prepare for your interviews.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Is there a free trial?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Yes, we offer a free trial so you can explore the app before committing.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Can I cancel my subscription?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Yes, subscriptions can be canceled anytime. We aim to make the process seamless.
            </p>
          </div>
        </div>
        <Button 
          onClick={handleBack} 
          className="mt-8 px-6 py-2 border border-black dark:border-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white"
        >
          Back to Home
        </Button>
      </main>
    </div>
  );
};

export default Questions;
