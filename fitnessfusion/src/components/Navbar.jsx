import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = sessionStorage.getItem("user_email");
    setIsLoggedIn(userEmail !== null);
  }, []);

  const clearSession = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <h2 className='text-white'>Fitness<span className='textcolor'>Fusion</span></h2>    
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              <img src="" alt="" />
            </Link>
            <Link className="nav-item nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/blogs">
              Blogs
            </Link>
            <Link className="nav-item nav-link" to="/contactus">
              Contact Us
            </Link>
            <Link className="nav-item nav-link" to="/activities">
              Activities
            </Link>
          </div>

          {isLoggedIn ? (
            <button className='join-us-btn loginbtn' onClick={clearSession}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className='join-us-btn loginbtn'>Login</button>
            </Link>
          )}

        </div>
      </nav>
    </>
  )
}

export default Navbar
