import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import LoginSignup from './components/LoginSignup'
import ContactUs from './components/ContactUs'
import Blogs from './components/Blogs'
import Navbar from './components/Navbar'
import Activities from './components/Activities'
import UpdateActivity from './components/UpdateActivity'
import Addactivity from './components/Addactivity'
import { ToastContainer } from 'react-toastify'
import ErrorPage from './components/ErrorPage'
import PrivateRouting from './components/PrivateRouting';

const App = () => {
  return (
    <>
    <Router>
       <Navbar/>
        <Routes>
        <Route element={<PrivateRouting/>}>
            <Route path='/updateactivity/:id' element={<UpdateActivity/>}/>
            <Route path='/activities' element={<Activities/>}/>
            <Route path='/addactivity' element={<Addactivity/>}/>
        </Route>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
    </Router>
    <ToastContainer theme="dark"/>
    </>
  )
}

export default App