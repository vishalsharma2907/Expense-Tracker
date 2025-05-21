//!Login page for new user

import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

     if (existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      toast.success("Logged in successfully!");
      navigate("/"); // redirect to Home or Expenses
    } else {
      toast.error("Invalid email or password.");
    }
  }
  return (
   <form 
   onSubmit={handleLogin}
   className="max-w-md mx-auto mt-10 p-6 border rounded shadow"
   >
     <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
    <input 
    type="email"
    placeholder='Enter Email'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    className="w-full p-2 mb-4 border rounded"
    />
    
    <input 
    type="password" 
    placeholder='Enter Password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    className="w-full p-2 mb-4 border rounded"
    />

    <button
    type='submit'
    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
    >
        Login
    </button>

    <p className="text-sm text-center mt-4">
  Don't have an account?{" "}
  <NavLink to="/signup" className="text-blue-600 hover:underline">
    Sign up
  </NavLink>
</p>
   </form>
  )
}

export default Login