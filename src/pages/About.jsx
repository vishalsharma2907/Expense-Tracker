//!Explains what the app does and how to use it (for user info)
import React from 'react'

const About = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">About ExpenseTracker</h1>

      <p className="text-gray-700 text-lg mb-6">
        Managing money shouldn’t feel like a chore. With ExpenseTracker, you can easily keep an eye on where your money goes and stay in control of your finances — anytime, anywhere.
      </p>

      <div className="bg-yellow-100 p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">✨ Why Use ExpenseTracker?</h2>
        <ul className="text-gray-700 space-y-2 text-left list-disc list-inside">
          <li>Track both income and expenses in one place</li>
          <li>Instantly know your remaining balance</li>
          <li>Edit or delete transactions with ease</li>
          <li>See a timeline of your financial activity</li>
          <li>All data stays safely on your device</li>
        </ul>
      </div>

      <blockquote className="italic text-gray-600 mt-6">
        `Made with ❤️ by <b>sheeraz Amin Dharekar </b>— because managing money shouldn’t be complicated.
      </blockquote>

      <p className="text-gray-600 mt-8">
        Start small. Stay consistent. And watch your money habits transform.
      </p>
    </div>
  );
};

export default About;