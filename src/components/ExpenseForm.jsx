//!A form where users can add a new expense (title, amount and type (income/expense).

import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expenseSlice";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type,setType]= useState("expense")

  const dispatch =useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) {
      toast.error("Please fill out both fields");
      return;
    }
    const now = new Date()
    const formattedDate = now.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
    const newExpense  = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      type,
      date: formattedDate,
    };

    dispatch(addExpense(newExpense ));
    toast.success("Expense added!");

    setTitle("");
    setAmount("");
    setType("expense");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border border-red-100 p-4 rounded-lg shadow max-w-xl mx-auto mt-4"
    >
      <h2 className="text-xl font-bold text-center">Add Income/Expense</h2>
      <input
        type="text"
        placeholder="Enter Description"
        className="p-2 rounded border border-gray-700"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Amount (+income, -expense)"
        className="p-2 rounded border border-gray-700"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 rounded border border-gray-700 bg-slate-300"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default ExpenseForm;
