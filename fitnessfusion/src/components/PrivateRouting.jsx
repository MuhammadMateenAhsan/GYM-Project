import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRouting = () => {
    const isLoggedIn = sessionStorage.getItem("user_email");
  return (
        (isLoggedIn != null) ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRouting