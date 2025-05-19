//!Configures Redux store — holds global state of the app
//!store --> This is the central place where all global state is managed
import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from "../redux/expenseSlice";

//! configureStore() -->Creates the Redux store with helpful defaults like devtools

export const store = configureStore({
  reducer: {
    // ! expense: expenseReducer-->Connects the expenseSlice reducer under the expense key
    expenses: expenseReducer,
  },
})