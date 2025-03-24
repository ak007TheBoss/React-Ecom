import React from 'react'
import Navbarcomponent from '../components/Navbarcomponent'

const Signup = () => {
  return (
    <>
    <Navbarcomponent/>
    <div className="container my-5">
    <div className="col-md-6 shadow-lg mt-5 offset-md-3">

            <div className="p-3 container">
                <label htmlFor="fname" className="text-white">Name</label>
                <input type="text" name="" id="fname" placeholder="Name" className="form-control"/>
            </div>
            <div className='p-3 container'>
              <label htmlFor="fname" className="text-white">Number</label>
              <input type="text" name="" id="fname" placeholder="Number" className="form-control"/>
            </div>
            <div className="p-3 container">
                <label htmlFor="fname" className="text-white">Email</label>
                <input type="text" name="" id="fname" placeholder="Email" className="form-control"/>
            </div>
            <div className="p-3 container">
                <label htmlFor="lname" className="text-white">Password</label>
                <input type="text" name="" id="lname" placeholder="Password" className="form-control"/>
            </div>
            <div className='p-3 container'>
            <label htmlFor="fname" className="text-white">COnfirm password</label>
            <input type="text" name="" id="fname" placeholder="Confirm Password" className="form-control"/>
            </div>
            <div className='p-3 container d-flex justify-content-center'>
                <button className='btn btn-success'>Signup</button>
            </div>
            </div>
      </div>
    </>
  )
}

export default Signup