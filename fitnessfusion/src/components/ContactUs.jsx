import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  // useref and sendemail functions are used to send contact form data to my email
  const form = useRef();
  const sendEmail = (e) => {
    emailjs.sendForm('service_ag71gje', 'template_5chmjlx', form.current, 'I7wP3ASnuM3I28PvY')
      .then((res) => {
          console.log(res);
      }).catch((err) => console.log(err));
  };
const empty={
  name:'',
  email:'',
  subject:'',
  message:''
}
  const [handle,setHandle] = useState(empty)
  const handler=(e)=>{
    const {name, value} = e.target;
    setHandle({...handle, [name]:value});
    console.log(handle);
  }
const contact=()=>{
    fetch('http://127.0.0.1:8000/',{
      method:'POST',
      body:JSON.stringify(handle),
      headers:{
        'Content-Type':'application/json'
      }
    })
  setHandle(empty)
  toast.success("Thanks for contacting us!")
  }

  return (
    <div className=" py-5 contactbg">
       <div className='contact-bg-img'>
        {/* this div is used for bg navbar */}
        </div> 
  <div className="row justify-content-center mr-0">
    <div className="col-md-6">
      <h2 className="text-center mb-4 display-4 textcolor"><span className='text-white'>C</span>ontact U<span className='text-white'>s</span></h2>
      <form ref={form}
      onSubmit={
        (e) => {
          e.preventDefault();
          contact();
          sendEmail();
        }
      }
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name='name'
            onChange={handler}
            value={handle.name}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name='email'
            value={handle.email}
            onChange={handler}
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name='subject'
            value={handle.subject}
            onChange={handler}
            placeholder="Enter the subject"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name='message'
            value={handle.message}
            onChange={handler}
            rows={5}
            placeholder="Enter your message"
            defaultValue={""}
          />
        </div>
        
    <button type='submit' className='join-us-btn'>Submit</button>
    
      </form>
    </div>
  </div>
</div>

  )
}

export default ContactUs