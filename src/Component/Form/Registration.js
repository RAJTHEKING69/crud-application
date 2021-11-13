import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
// import {Redirect} from 'react-router-dom';
// import {useHistory} from 'history'
import {useNavigate} from 'react-router-dom';


function Registration() {
//    let history = useHistory()
const navigate = useNavigate();

  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    cfnPassword:""
  });

  const postUserData = async(e)=>{
      e.preventDefault();
   const response = await  axios.post(`https://618f638250e24d0017ce16ea.mockapi.io/fakeData`,form);
//    console.log(response)
if(response.status ===201){
    navigate('/read');
}
   

//    history.push('/read')
{/* <Redirect to="/read"/> */}

  }


  const handleChange = (e) =>{
      const {name,value} = e.target;
      setform({...form,[name]:value})
      console.log(form)

  }

  return (
    <div>
      <form className='container text-start w-50 bg-info shadow rounded-2'>
        <div className="mb-3">
          <label htmlFor="FirstName" className="form-label fs-2">
            First Name
          </label>
          <input
            type="text"
            value={form.firstName}
            className="form-control"
            name='firstName'
            placeholder='Enter your FirstName'
            onChange={handleChange}
          />
          </div>
    
        <div className="mb-3">
          <label htmlFor='LastName' className="form-label fs-2">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            value={form.lastName}
            name='lastName'
            placeholder='Enter your LastName'
            onChange={handleChange}
          />
        </div>        
        <div className="mb-3">
          <label htmlFor='Email' className="form-label fs-2">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={form.email}
            name='email'
            placeholder='Enter your Email'
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
        <label htmlFor='Phone Number' className="form-label fs-2">
            Mobile Number
          </label>
          <input
            type="tel"
            className="form-control"
            name='phone'
            value={form.phone}
            placeholder='Enter your Number'
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
        <label htmlFor='Password' className="form-label fs-2">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name='password'
            value={form.password}
            placeholder='Enter your Password'
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
        <label htmlFor='Confirm Password' className="form-label fs-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name='cfnPassword'
            value={form.cfnPassword}
            placeholder='Confirm Password'
            onChange={handleChange}
          />
        </div>
        <button type='submit' onClick={postUserData} className="btn btn-primary d-block m-auto">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
