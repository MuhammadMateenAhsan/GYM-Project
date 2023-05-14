import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className='blogspage'>  
    <div className='blogs-bg-img'>
        <h2 className='blogs-inner-text display-3'> <span className='text-white'>B</span>log<span className='text-white'>s</span></h2>
        </div>  
    <div className="card text-start ml-5 col-md-12">
  <img src="images\gallery\course-1.jpg" height={"300px"} width={"320px"} className="" alt="..." />
  <div className="card-body">
    <p className='text-muted'>
        <span className='d-flex'>
        <p>March 25, 2019</p> 
        <p className='ml-3'>John Stain</p>
        </span>
    </p>
    <h4 className="card-title">Blog Title</h4>
    <p className="card-text">Blog description goes here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis obcaecati repudiandae natus.</p>
    <Link to="#" className="textcolor">
      Read More...
    </Link>
  </div>
</div>
    </div>

  )
}

export default Blogs