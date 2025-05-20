//!Landing page of the app that gives a basic overview or intro
import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto text-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to ExpenseTracker 💸</h1>
      <p className="text-gray-700 text-lg mb-6">
        Track your income and expenses effortlessly. Stay organized, analyze your spending habits, and take control of your financial journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="font-semibold text-xl">✅ Add Expenses or Income</h2>
          <p className="text-sm text-gray-600 mt-2">
            Quickly log all your financial activities and categorize them easily.
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="font-semibold text-xl">📊 Track Your Balance</h2>
          <p className="text-sm text-gray-600 mt-2">
            See how much you're spending vs earning at a glance.
          </p>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="font-semibold text-xl">✏️ Edit or Delete Entries</h2>
          <p className="text-sm text-gray-600 mt-2">
            Keep your records accurate and up to date anytime.
          </p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow">
          <h2 className="font-semibold text-xl">🔐 Data Privacy</h2>
          <p className="text-sm text-gray-600 mt-2">
            All your data is stored locally on your device. You own it!
          </p>
        </div>
      </div>

      <blockquote className="italic text-gray-500 mb-8">
        “Do not save what is left after spending, but spend what is left after saving.” — Warren Buffett
      </blockquote>

      <Link
        to="/expenses"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Start Tracking Now
      </Link>
    </div>
  );
};

export default Home;