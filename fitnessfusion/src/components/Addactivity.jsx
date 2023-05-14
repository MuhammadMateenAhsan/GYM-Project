import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Addactivity = () => {
  const empty = {
    title: '',
    description:''
  }

  const [handle,setHandle] =useState(empty);
  const senddatatoapi = async()=>{
    if(handle.title =="" || handle.description==''){
      toast.error("Please fill the input fields first.");
    }else{
     await fetch("http://127.0.0.1:8000/activities",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(handle)
    })
    setHandle(empty)
    toast.success("Activity added successfully")
  }
  }
  const handler=(e)=>{
    const {name,value}=e.target;
    setHandle({...handle,[name]:value});
  }
  return (
    <div className=" py-5 contactbg">
    <div className='contact-bg-img'>
     {/* <h2 className='blogs-inner-text display-3'>Blogs</h2> */}
     </div> 
<div className="row justify-content-center mr-0">
 <div className="col-md-6">
   <h2 className="text-center mb-4 display-4 textcolor"><span className='text-white'>A</span>dd New Activit<span className='text-white'>y</span></h2>
   <form 
   onSubmit={
    (e)=>{
      e.preventDefault();
      senddatatoapi();
    }
   }
   >
     <div className="mb-3">
       <label htmlFor="name" className="form-label">
         Title
       </label>
       <input
         type="text"
         className="form-control"
         id="name"
         name='title'
         value={handle.title}
         onChange={handler}
         placeholder="Enter title here"
       />
     </div>
     <div className="mb-3">
       <label htmlFor="message" className="form-label">
         Description
       </label>
       <textarea
         className="form-control"
         id="description"
         rows={5}
         name='description'
         onChange={handler}
         value={handle.description}
         placeholder="Enter activity details here"
         defaultValue={""}
       />
     </div>
 <button type='submit' className='join-us-btn'>Add New</button>
   </form>
 </div>
</div>
</div>
  )
}

export default Addactivity