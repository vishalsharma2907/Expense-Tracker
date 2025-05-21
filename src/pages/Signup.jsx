//!Sign Up page for new user

import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate()

  const handleSignup=(e)=>{
    e.preventDefault()
    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }

    const users =JSON.parse(localStorage.getItem("users"))||[]
    const userExists = users.find((user)=>user.email ===email);
    if (userExists) {
        toast.error("User already exists!");
      return;
    }

    const newUSer={email,password}
    users.push(newUSer)
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Signup successful! Please log in.");
    navigate("/login");
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form  onSubmit={handleSignup} className="space-y-4">
            <input 
            type="email"
            placeholder='Email'
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
            type="password" 
            placeholder='Password'
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button
            type='submit'
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                Sign Up
            </button>
            <p className="text-sm text-center mt-2">
  Don't have an account?{" "}
  <NavLink to="/login" className="text-blue-600 hover:underline">
    Login
  </NavLink>
</p>
        </form>
    </div>
  )
}

export default Signup


