//!Displays all added expenses in a list or table with options to delete/edit

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense, editExpenses } from "../redux/expenseSlice";
import toast from "react-hot-toast";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedAmount, setEditedAmount] = useState("");

  const handleDelete = (expense) => {
    dispatch(deleteExpense(expense.id));
    toast.success(
      `${expense.type === "income" ? "Income" : "Expense"} Deleted`
    );
  };

  const startEditing = (exp) => {
    console.log("Editing started",exp.title,exp.amount);
    
    setEditingId(exp.id);
    setEditedTitle(exp.title);
    setEditedAmount(exp.amount);
  };

  const handleCancel=()=>{
     setEditingId(null);
    setEditedTitle("");
    setEditedAmount("");
  }

  const handleSave=(id)=>{
    if (!editedTitle || !editedAmount) {
      toast.error("Please enter both title and amount");
      return;
    }
    dispatch(
      editExpenses({
        id,
        updatedData: { title: editedTitle, amount: parseFloat(editedAmount) },
      })
    )
    toast.success("Transaction updated");
    setEditingId(null);
    setEditedTitle("");
    setEditedAmount("");
  }

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
            className={`flex flex-col sm:flex-row justify-between p-3 rounded border ${
              exp.type === "income" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <div className="flex-1">
              {editingId === exp.id ? (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="p-1 rounded border border-gray-500 w-full sm:w-auto"
                  />
                  <input
                    type="number"
                    value={editedAmount}
                    onChange={(e) => setEditedAmount(e.target.value)}
                    className="p-1 rounded border border-gray-500 w-full sm:w-24 "
                  />
                </div>
              ) : (
                <div className="sm:mb-0 mb-3">
                  <p className="font-medium">{exp.title}</p>
                  <p className="text-sm text-gray-500">{exp.date}</p>
                  <p className="text-sm text-gray-600 italic">
                    ₹{exp.amount} ({exp.type})
                  </p>
                  <p className="text-sm text-gray-600 italic">Payment Mode{" "}
                     ({exp.paymentMode})
                  </p>
                </div>
              )}
            </div>

            <div className="flex  flex-wrap sm:flex-nowrap items-center gap-2 ml-4">
              {editingId === exp.id ? (
                <>
                  <button 
                  className="bg-green-500 text-white px-3 py-1 rounded"
                  onClick={()=>handleSave(exp.id)}
                  >
                    Save
                  </button>

                  <button 
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                  onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button 
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                  onClick={()=>startEditing(exp)}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(exp)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
