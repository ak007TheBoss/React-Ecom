import React from 'react'
import Navbarcomponent from '../components/Navbarcomponent'
const Singlepage = () => {
  return (
    <>
    <Navbarcomponent/>
    <div className='container shadow-lg'>
        <div className='row my-3'>
            <div className='col-md-6 my-3'>
                <img src="https://m.media-amazon.com/images/I/61XtQfb-sRL._AC_SL1000_.jpg" alt="" style={{width:"30rem"}} />
            </div>
            <div className='col-md-6 my-3'>
                <h1>Laptop</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus et magnam earum harum distinctio libero aliquam, minima dicta itaque, consectetur id eligendi. Earum nobis error rerum tenetur molestias aperiam eligendi?</p>
                <div className='p-3'>
                    <h3>No. Items,</h3>
                    <div className='d-flex justify-content-start'>
                    <button className='btn btn-secondary me-2'>+</button>
                    <h5>0</h5>
                    <button className='btn btn-secondary ms-2'>-</button>
                    </div>
                </div>
                <div className='p-3 d-flex justify-content-start mt-2'>
                    <button className='btn btn-success'>Buy Now</button>
                    <button className='ms-3 btn btn-secondary'>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Singlepage