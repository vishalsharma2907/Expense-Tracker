//!Shows current balance, total income, and total expenses
import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
    
    const expenses =useSelector((state)=>state.expenses.expenses)

    const income= expenses
    .filter((exp)=>exp.type ==="income")
    .reduce((acc,curr)=>acc+Number(curr.amount),0)

     const expense= expenses
    .filter((exp)=>exp.type ==="expense")
    .reduce((acc,curr)=>acc+Number(curr.amount),0)

    const balance =income-expense;

  return (
    <div className='max-w-xl mx-auto mt-6 border p-4 rounded shadow text-center border-red-100'>
      <h3 className="text-xl font-semibold mb-4 text-center">Your Balance</h3>
      <div className="bg-blue-50 p-4 rounded-lg shadow text-center mb-4">
        <p className="text-gray-600 text-sm">Total Balance</p>
        <h2 className="text-3xl font-bold text-blue-700">₹{balance}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-100 p-3 rounded text-center">
          <p className="text-green-800 text-sm font-medium">Income</p>
          <p className="text-xl font-semibold text-green-700">₹{income}</p>
        </div>
        <div className="bg-red-100 p-3 rounded text-center">
          <p className="text-red-800 text-sm font-medium">Expense</p>
          <p className="text-xl font-semibold text-red-700">₹{expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
