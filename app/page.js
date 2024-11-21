"use client";
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import ThemeToggleButton from './dashboard/(components)/ThemeToggleButton';

const Home = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
      <Head>
        <title>Innova - AI Interview Preparation App</title>
        <meta name="description" content="AI-powered platform for interview success." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Simple Header */}
      <header className="w-full py-4 bg-gray-100 dark:bg-gray-800">
        <div className="flex justify-between max-w-7xl mx-auto px-6">
        <div></div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Innova - AI Interview Preparation
          </h1>
          <span>
            <ThemeToggleButton/>
          </span>
        </div>
      </header>

      <main className="w-full flex flex-col items-center justify-center px-6 py-10">
        
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 text-center max-w-lg">
          Elevate your interview preparation with cutting-edge AI. Tailored practice, expert insights, and real-time mock interviews—all in one place.
        </p>

        {/* Get Started Button */}
        <Button 
          onClick={handleGetStarted} 
          className="px-6 py-3 border border-black rounded hover:bg-green-600 dark:hover:bg-green-700"
        >
          Get Started
        </Button>

        {/* Features Section */}
        <section className="mt-12 w-full max-w-3xl text-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded hover:shadow-md bg-gray-50 dark:bg-gray-700 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Tailored Practice</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Focus on areas where you need improvement with AI-driven insights.
              </p>
            </div>
            <div className="border p-4 rounded hover:shadow-md bg-gray-50 dark:bg-gray-700 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Mock Interviews</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simulate real interviews to gain confidence and refine your skills.
              </p>
            </div>
            <div className="border p-4 rounded hover:shadow-md bg-gray-50 dark:bg-gray-700 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Expert Feedback</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get actionable advice from industry professionals.
              </p>
            </div>
            <div className="border p-4 rounded hover:shadow-md bg-gray-50 dark:bg-gray-700 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Comprehensive Resources</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access curated guides, tips, and common interview questions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
