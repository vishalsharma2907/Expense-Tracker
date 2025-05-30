//! Main file where routing and toast are configured
import React from "react";
import "./App.css";
import Header from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Expenses from "./pages/Expenses";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ExportPage from "./pages/ExportPage";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/expenses",
        element: (
            <ProtectedRoute>
              <Expenses />
            </ProtectedRoute>
        ),
      },
      {
        path: "/export",
        element: (
            <ProtectedRoute>
              <ExportPage/>
            </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
 
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
