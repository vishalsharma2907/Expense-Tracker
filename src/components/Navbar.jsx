//!Shows navigation links to move between pages like Home, About, ExpenseForm, etc.
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 bg-gradient-to-r from-blue-200 to-indigo-600 shadow-md'>
      <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-6'>
        <NavLink to="/" className="px-3 py-1 sm:px-4 sm:py-2 rounded text-white border border-white 
          hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base">Home</NavLink>
        <NavLink to="/about" className="px-3 py-1 sm:px-4 sm:py-2 rounded text-white border border-white 
          hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base">About</NavLink>
        <NavLink to="/expenses" className="px-3 py-1 sm:px-4 sm:py-2 rounded text-white border border-white 
          hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base">Expense Tracker</NavLink>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-3 sm:mt-0">
        {!currentUser ? (
        <>
        <NavLink to="/signup" className="px-3 py-1 sm:px-4 sm:py-2 rounded text-white border border-white 
          hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base">Sign Up</NavLink>
        <NavLink to="/login" className="px-3 py-1 sm:px-4 sm:py-2 rounded text-white border border-white 
          hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base">Login</NavLink>
        </>
        ):(

          <>
          
          <button
          onClick={handleLogout}
          className="px-3 py-1 sm:px-4 sm:py-2 rounded text-white border border-white 
                hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 text-sm sm:text-base"
        >
          Logout
        </button>
        <span className='text-white text-sm sm:text-base font-medium text-center sm:text-left '>
            Welcome,<strong className="underline decoration-white">{currentUser.email.split("@")[0]}</strong>
          </span>
        </>
        )}
      
    </div>
    </div>
  )
}

export default Navbar