import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Activities = (props) => {
  // const activities = useSelector((state) => state.Activities);

  // useEffect(() => {
  //   getActivities(props);
  // }, []);

//  const {title, description} = res.user;
//  console.log(title)

// function to delete data from DB
const deletedatafromapi = async(id)=>{
  let del = await fetch(`http://127.0.0.1:8000/activities/${id}`,{
    method:"DELETE"
  })
  del = await del.json()
}
 

    const [api,setApi] = useState([])
    let fetchactivity = async()=>{
        let record = await fetch('http://127.0.0.1:8000/activities');
        let data = await record.json();
        setApi(data)
  
    }
     useEffect(()=>{
      fetchactivity();
  },[deletedatafromapi])


  const isLoggedIn = sessionStorage.getItem("user_email");
      if (isLoggedIn === null) {
              Navigate("/login")

            }else{
  return (
    <div className='bg-dark p-5 col-md-12'>
      
        <div className='blogs-bg-img'>
        </div> 
        <div className='addactivity col-md-12'>
            <Link to="/addactivity">
    <button>Add New Activity</button>
            </Link>
        </div>
        <div className='activitycard col-md-12'>
       {
         api.map((api)=>(
          
<div className="card text-start">
  <div className="card-body">
    <h4 className="card-title textcolor">{api.title}</h4>
    <p className="card-text">{api.description}</p>
    <span className='d-flex'>
        <Link to={`/updateactivity/${api._id}`}>
    <button className='editbtn' onClick={()=>editapi(api._id)}>edit</button>
        </Link>
        <Link to="#">
    <button className='deletebtn ml-2 ' onClick={()=>deletedatafromapi(api._id)}>Delete</button>
        </Link>
    </span>
  </div>
</div>
         ))
       }

          
</div>
    </div>
  )
}
}

export default Activities
