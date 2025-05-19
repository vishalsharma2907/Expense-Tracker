//!Shows navigation links to move between pages like Home, About, ExpenseForm, etc.
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-8 p-4 shadow-md bg-gradient-to-r from-slate-200 to-slate-50'>
        <NavLink to="/" className="px-4 py-2 border border-black rounded hover:bg-gray-400">Home</NavLink>
        <NavLink to="/about" className="px-4 py-2 border border-black rounded hover:bg-gray-400">About</NavLink>
        <NavLink to="/expenses" className="px-4 py-2 border border-black rounded hover:bg-gray-400">Expense Tracker</NavLink>
    </div>
  )
}

export default Navbar