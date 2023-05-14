import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateActivity = () => {
  const Navigate = useNavigate();
  const empty = {
    title: '',
    description:''
  }
  const { id } = useParams();
  useEffect(()=>{
     fetch(`http://localhost:8000/activities/${id}`)
     .then(res => res.json())
     .then(data => {
      setHandle({
        title: data.title,
        description: data.description
      });
    })
    .catch(error => {
      console.log(error);
    });
  },[id])

  const [handle,setHandle] =useState(empty);
  const updateactivity = async()=>{
    if(handle.title =="" || handle.description==''){
      toast.error("Please fill the input fields first.");
    }else{
      await fetch(`http://localhost:8000/activities/${id}`,{
        method:'PUT',
        headers:{
          "content-Type": "application/json",
         },
         body:JSON.stringify(handle)
        
      })
      console.log(handle)
      setHandle(empty)
      Navigate("/activities")
    }}
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
   <h2 className="text-center mb-4 display-4 textcolor"><span className='text-white'>U</span>pdate Activit<span className='text-white'>y</span></h2>
   <form 
   onSubmit={
    (e)=>{
      e.preventDefault();
      updateactivity();
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
        //  defaultValue={""}
       />
     </div>
 <button type='submit' className='join-us-btn'>Update</button>
   </form>
 </div>
</div>
</div>
  )
}

export default UpdateActivity