import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  });

  const InputEvent = (event) =>{
  const {name, value}= event.target;
   setData((perVal)=>{
    return{
      ...perVal,
      [name] : value,
    }
   })
  }
  const fromSubmit = (e) =>{
  e.preventDefault();
  alert(
     `  
        My name is ${data.fullname}. 
        My moblie number is ${data.phone}. 
        and email is ${data.email}. 
        Here is What I want to say ${data.msg} `
  );
  };

  return (
    <>
      <div className="my-1">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={fromSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" name='phone' value={data.phone} onChange={InputEvent} placeholder="Your Phone Number" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" name='msg' value={data.msg } onChange={InputEvent} placeholder="Your Message"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
