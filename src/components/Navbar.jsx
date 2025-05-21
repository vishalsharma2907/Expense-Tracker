//!Shows navigation links to move between pages like Home, About, ExpenseForm, etc.
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className='flex justify-center gap-4 p-4 shadow-md bg-gradient-to-r from-blue-200 to-indigo-600'>
      {/* Left side - Nav Links */}
      <div className='flex gap-6'>
        <NavLink to="/" className="px-4 py-2 rounded text-white border border-white 
               hover:bg-white hover:text-blue-600 hover:shadow-md 
               transition-all duration-300 transform hover:scale-105">Home</NavLink>
        <NavLink to="/about" className="px-4 py-2 rounded text-white border border-white 
               hover:bg-white hover:text-blue-600 hover:shadow-md 
               transition-all duration-300 transform hover:scale-105">About</NavLink>
        <NavLink to="/expenses" className="px-4 py-2 rounded text-white border border-white 
               hover:bg-white hover:text-blue-600 hover:shadow-md 
               transition-all duration-300 transform hover:scale-105">Expense Tracker</NavLink>
      </div>
      {/* Right side - Auth Buttons */}
      <div className="flex items-center gap-4">
        {!currentUser ? (
        <>
        <NavLink to="/signup" className="px-4 py-2 rounded text-white border border-white 
               hover:bg-white hover:text-blue-600 hover:shadow-md 
               transition-all duration-300 transform hover:scale-105">Sign Up</NavLink>
        <NavLink to="/login" className="px-4 py-2 rounded text-white border border-white 
               hover:bg-white hover:text-blue-600 hover:shadow-md 
               transition-all duration-300 transform hover:scale-105">Login</NavLink>
        </>
        ):(

          <>
          
          <button
          onClick={handleLogout}
          className="px-4 py-2 rounded text-white border border-white 
               hover:bg-white hover:text-blue-600 hover:shadow-md 
               transition-all duration-300 transform hover:scale-105"
        >
          Logout
        </button>
        <span className='text-white'>
            Welcome,<strong>{currentUser.email.split("@")[0]}</strong>
          </span>
        </>
        )}
      
    </div>
    </div>
  )
}

export default Navbar