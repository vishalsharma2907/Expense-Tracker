//!Login page for new user

import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin= async (e)=>{
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

     if (existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      toast.success("Logged in successfully!");
      navigate("/"); // redirect to Home

      // ✅ Discord webhook notification
      try {
        await fetch("https://canary.discord.com/api/webhooks/1377381686287007925/Oxy0qk4wQlxTsnp_SCyU8eid9_EsIfSOZ6k7ypmRfJP6zeoCEb_tFjRnG0AjkCu-hWI1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            content: `✅ A user just logged in using email: ${email} at ${new Date().toLocaleString()}`
          })
        });
      } catch (err) {
        console.error("❌ Failed to send Discord notification:", err);
      }
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