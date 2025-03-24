import React from 'react'
import Navbarcomponent from '../components/Navbarcomponent'
const Login = () => {
  return (
    <>
    <Navbarcomponent/>
      <div className='container d-flex justify-content-center'>
        <div className='d-block'>
 
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" id="" placeholder='Name' className='form-control'/>
          </div>
          <div className='d-block'>
            <label htmlFor="name">Last Name</label>
            <input type="text" name="lname" id="" placeholder='Name' className='form-control'/>
          </div>
          <div className='d-block'>
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" id="" placeholder='Name' className='form-control'/>
          </div>
          <div className='d-block'>
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" id="" placeholder='Name' className='form-control'/>
          </div>
          <div className='d-block'>
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" id="" placeholder='Name' className='form-control'/>
          </div>
          <div  className='d=block'>
            <button>Login</button>
          </div>
        </div>
    </>

  )
}

export default Login