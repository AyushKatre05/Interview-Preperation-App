import React from 'react';
import AddNewInterview from './(components)/AddNewInterview';
import InterviewList from './(components)/InterviewList';

const Dashboard = () => {
  return (
    <div className="p-10 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <h2 className="text-gray-500 dark:text-gray-400">Create and start your AI mock Interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-6">
        <AddNewInterview />
      </div>
      <InterviewList />
    </div>
  );
};

export default Dashboard;
