import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
    <div className='col-md-12 h-parent-div'>
    {/* navbar is shipted to new component from here */}
    </div>
    <main>
        <div className='header-inner-text'>
        <h1 className='display-4'>STEP UP YOUR 
            <h1 className='display-4 h-child-2'>FITNESS CHALLANGE</h1>
            <h1 className='display-4'>WITH US</h1>
        </h1>
        <button className='join-us-btn no-outline' >join us &gt; </button>
        </div>
    </main>
      </header>
    </>
  )
}

export default Header