//! Main file where routing and toast are configured
import React from 'react'
import './App.css'
import Header from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Expenses from './pages/Expenses'
import { Toaster } from 'react-hot-toast'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

const router=createBrowserRouter([
  {
    path:"/",
    element :(
      <>
      <Navbar/>
      <Home/>
      </>
    ),
  },
   {
    path:"/about",
    element :(
      <>
      <Navbar/>
      <About/>
      </>
    ),
  },
   {
    path:"/expenses",
    element :(
      <>
      <Navbar/>
      <ProtectedRoute>
      <Expenses/>
      </ProtectedRoute>
      </>
    ),
  },

  {
    path:"/signup",
    element :(
      <>
      <Navbar/>
      <Signup/>
      </>
    ),
  },
   {
    path:"/login",
    element :(
      <>
      <Navbar/>
      <Login/>
      </>
    ),
  },


])
const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default App