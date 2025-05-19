//!A form where users can add a new expense (title, amount, type, etc.)
import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Balance from "../components/Balance";

const Expenses = () => {
  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Expense Tracker Page
      </h2>
      {/* Top Section: Form and Balance */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Balance */}
        <div className="bg-white shadow-md rounded p-4 border border-red-300">
          <Balance />
        </div>
        {/* Expense Form on right */}
        <div className="bg-white shadow-md rounded p-4 border border-red-300">
        <ExpenseForm />
        </div>
      </div>
       <div className="max-w-3xl mx-auto mt-10 ">
          {/* Bottom Section: Expense List  */}
          <ExpenseList />
        </div>

    </div>
  );
};

export default Expenses;
