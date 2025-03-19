import React from 'react'
import Navbarcomponent from '../components/Navbarcomponent'
import '../css/products.css'
const Products = () => {
  return (
    <>
      <Navbarcomponent/>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='my-3 shadow-lg'>
              <h1 className='text-center'>Categories</h1>
              <hr />
              <div>
                <div className='d-flex justify-content-evenly mb-2'>
                <p>Monitors</p>
                </div>
                <div className='d-flex justify-content-evenly mb-2'>
                <p>Laptops</p>
                </div>
                <div className='d-flex justify-content-evenly mb-2'>
                <p>Mouse</p>
                </div>
                <div className='d-flex justify-content-evenly mb-2'>
                <p>Keyboards</p>
                </div>
                <div className='d-flex justify-content-evenly mb-2'>
                <p>Accessories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>

  )
}

export default Products