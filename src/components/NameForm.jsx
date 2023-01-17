import React from 'react'
import { useState } from 'react'



const NameForm = () => {

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [password2,setPassword2] = useState('');
  const [people ,setPeople] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      firstName : firstName,
      lastName : lastName,
      email : email , 
      password : password,
      password2 : password2,
    }
    setPeople([...people,person]);
  }

  

  return (
    <div className='card'>
      <h5 className="card-header"> CREATE ACCOUNT</h5>
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)} >
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" name="firstName" id="firstName" className="form-control bg-light" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" name="lastName" id="lastName" className="form-control bg-light" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email</label>
            <input type="email" name="Email" id="Email" className="form-control bg-light" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">Password</label>
            <input type="password" name="Password" id="Password" className="form-control bg-light" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="Password2" className="form-label">Confirm Password</label>
            <input type="password" name="Password" id="Password2" className="form-control bg-light" value={password2} onChange={(e) => setPassword2(e.target.value)} />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit"  className="btn btn-primary">Create Account</button>
          </div>
        </form>
      </div>
      <div className="mb-3">

        <div className="card">
          <h5 className="card-header">Your Form Data</h5>
        </div>
          <div className="card-body">

          <p>first name: {firstName}</p>
          <p>last name : {lastName}</p>
          <p>Email : {email}</p>
          <p>password : {password}</p>
          <p>Confirm password : {password2}</p>
          </div>
      </div>
    </div>
  )
}



export default NameForm
