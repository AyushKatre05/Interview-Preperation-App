// pages/index.tsx
"use client";
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Home = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-green-600 text-white flex flex-col items-center justify-center">
      <Head>
        <title>Interview Preparation App</title>
        <meta name="description" content="Prepare for your interviews with ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center px-6 py-10">
        <h1 className="text-5xl font-extrabold text-white mb-4 text-center">Ace Your Interviews with Our Comprehensive Prep Tool</h1>
        <p className="text-lg text-white mb-6 text-center max-w-2xl">
          Our AI-powered Interview Preparation App provides you with all the resources you need to succeed. From practice questions to personalized feedback, we’ve got you covered.
        </p>
        <Button 
          onClick={handleGetStarted} 
          className="mt-4 px-8 py-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 shadow-lg"
        >
          Get Started
        </Button>
        <section className="mt-12 w-full max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Our App?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white hover:scale-105 text-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Personalized Practice</h3>
              <p className="text-lg">
                Tailor your practice sessions to focus on your weaknesses. Our app adapts to your progress and provides questions that challenge you.
              </p>
            </div>
            <div className="bg-white hover:scale-105 text-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Expert Feedback</h3>
              <p className="text-lg">
                Receive detailed feedback on your answers from industry experts. Understand where you went wrong and how to improve.
              </p>
            </div>
            <div className="bg-white hover:scale-105 text-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Comprehensive Resources</h3>
              <p className="text-lg">
                Access a wide range of study materials, including interview tips, common questions, and model answers.
              </p>
            </div>
            <div className="bg-white hover:scale-105 text-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Mock Interviews</h3>
              <p className="text-lg">
                Practice in real-time with our mock interview feature. Simulate an actual interview experience and get immediate feedback.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-12 w-full max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-lg italic">
                This app transformed my interview preparation. The personalized practice and expert feedback were invaluable.
              </p>
              <p className="mt-4 font-bold">- Jane Doe</p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-lg italic">
                I landed my dream job thanks to this app. The mock interviews helped me build confidence and perform well.
              </p>
              <p className="mt-4 font-bold">- John Smith</p>
            </div>
          </div>
        </section>
        <section className="mt-12 w-full max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Get Started Now</h2>
          <p className="text-lg mb-6">
            Sign up today and take the first step towards acing your next interview. Our app is here to help you succeed.
          </p>
          <Button 
            onClick={handleGetStarted} 
            className="mt-4 px-8 py-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 shadow-lg"
          >
            Sign Up
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Home;
