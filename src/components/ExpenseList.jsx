//!Displays all added expenses in a list or table with options to delete/edit

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../redux/expenseSlice";
import toast from "react-hot-toast";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch =useDispatch()

 const handleDelete = (expense) => {
  dispatch(deleteExpense(expense.id));
  toast.success(`${expense.type === "income" ? "Income" : "Expense"} Deleted`);
};
  if (expenses.length === 0) {
    return (
      <p className="text-center mt-5 text-gray-500">
        No transactions added yet.
      </p>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-6 border p-4 rounded shadow border-red-300">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Transaction History
      </h2>
      <ul className="space-y-2">
        {expenses.map((exp) => (
          <li
            key={exp.id}
            className={`flex justify-between p-3 rounded border ${
              exp.type === "income" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <div>
              <p className="font-medium">{exp.title}</p>
              <p className="text-sm text-gray-500">{exp.date}</p> 
              <p className="text-sm text-gray-600 italic">
                ₹{exp.amount} ({exp.type})
              </p>
            </div>
            <button
              onClick={() => handleDelete(exp)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
