import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRouting = () => {
    const Navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem("user_email");
  return (
        (isLoggedIn != null) ? <Outlet/> : Navigate("/login")
  )
}

export default PrivateRouting