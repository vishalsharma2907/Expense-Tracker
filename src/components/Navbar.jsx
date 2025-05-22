//!Shows navigation links to move between pages like Home, About, ExpenseForm, etc.
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {

  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className='bg-gradient-to-r from-blue-200 to-indigo-600 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='text-white text-lg font-bold'>Expense Tracker <FaArrowRight className='inline ml-2'/></div>
        <div className='sm:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <ImCross   className="h-6 w-6 text-white mt-2" />
            ) : (
              <IoReorderThreeOutline className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      <div className={`flex-col sm:flex sm:flex-row sm:items-center sm:gap-4 ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
        <NavLink to="/" className="block px-3 py-2 rounded text-white border border-white 
          hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base">Home</NavLink>
        <NavLink to="/about" className="block px-3 py-2 rounded text-white border border-white 
          hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base">About</NavLink>
        <NavLink to="/expenses" className="block px-3 py-2 rounded text-white border border-white 
          hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base">Expense Tracker</NavLink>
     
        {!currentUser ? (
        <>
        <NavLink to="/signup" className="block px-3 py-2 rounded text-white border border-white 
          hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base">Sign Up</NavLink>
        <NavLink to="/login" className="block px-3 py-2 rounded text-white border border-white 
          hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base">Login</NavLink>
        </>
        ):(

          <>
          
          <button
          onClick={handleLogout}
          className="block px-3 py-2 rounded text-white border border-white 
          hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base"
        >
          Logout
        </button>
        <span className='text-white text-sm font-medium mt-2 text-center sm:mt-0 '>
            Welcome,<strong className="underline decoration-white">{currentUser.email.split("@")[0]}</strong>
          </span>
        </>
        )}
      
    </div>
    </div>
    </div>
  )
}

export default Navbar