import React from 'react'
import Navbarcomponent from '../components/Navbarcomponent'

const Cartpage = () => {
    
  return (
    <>
    <Navbarcomponent/>
        <div className='container'>
            <div className='row'>
                <>
                <div className='col-md-6 my-3'>
                    <img src="#" alt="..." style={{height:"300px",width:"300px"}}/>
                </div>
                <div className='col-md-6 my-3'>
                    <div>
                        <h1>Name:</h1>
                    </div>
                    <div>
                        <h1>Price:</h1>
                    </div>
                    <div>
                        <h1>Available:</h1>
                    </div>
                    <div className='d-flex justify-content-start mt-4'>
                        <button className='btn btn-success'>Buy Now</button>
                        <button className='btn btn-danger ms-3'>Remove</button>
                    </div>
                </div>
                </>
            </div>
        </div>


    </>
  )
}

export default Cartpage