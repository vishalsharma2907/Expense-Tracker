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
      <Expenses/>
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