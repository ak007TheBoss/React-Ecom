import React from 'react'
import Navbarcomponent from '../components/Navbarcomponent'
const Login = () => {
  return (
    <>
    <Navbarcomponent/>
      <div className='container d-flex justify-content-center'>
        <div className=''>
 
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
          <div className='d-block'>
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" id="" placeholder='Name' className='form-control'/>
          </div>
          <div className='d-block'>
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" id="" placeholder='Name' className='form-control'/>
          </div>
        </div>
    </>

  )
}

export default Login