//!Handles logic for Redux state changes (like add/delete expense)
//! Purpose: Manages all expense-related state using Redux Toolkit

import { createSlice } from "@reduxjs/toolkit";
//!Load from localStorage
const loadFromLOcalStorage=()=>{
  try {
    const data=localStorage.getItem("expenses")
    return data? JSON.parse(data):[];

  } catch (error) {
    console.error("Error loading from localStorage", error);
    return [];
  }
}

//!Save to localStorage
const saveToLocalStorage = (expenses) => {
  try {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};

//!Starts with an empty array of expenses.
const initialState = {
  expenses: loadFromLOcalStorage(),
};

//!Creates Redux logic without writing boilerplate code.
const expenseSlice = createSlice({
  name: "expenses",
  initialState,

  reducers: {
    //!Adds a new expense object to the global list.
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
      saveToLocalStorage(state.expenses);
    },
    //!Removes an expense from the list using its id
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      saveToLocalStorage(state.expenses);
    },
    clearAllExpenses: (state) => {
      state.expenses = [];
      saveToLocalStorage(state.expenses);
    },
  },
});

export const { addExpense, deleteExpense ,clearAllExpenses} = expenseSlice.actions;
export default expenseSlice.reducer;
