//!component to wrap other pages that should be restricted unless the user is logged in.

import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const currentUser =JSON.parse(localStorage.getItem("currentUser"))

    if(!currentUser){
        return <Navigate to="/login" replace/>
    }
  return  children;
}

export default ProtectedRoute