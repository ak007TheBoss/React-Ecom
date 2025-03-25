import React from 'react'
import Navbarcomponent from '../components/Navbarcomponent'

const SearchDatapage = () => {
  return (
    <>
    <Navbarcomponent/>
    <div className='container'>
        <div className='row'>

          <div className='col-md-3'>
            <div className='my-3 d-flex justify-content-evenly'>
              <input type="text" name="" id="" placeholder='Search our products' className='form-control' onChange={(e)=>setSearchData(e.target.value)}/>
              <button className='btn btn-success ms-2' 
              onClick={searchdatas}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg></button>
            </div>
            <div className='my-3 shadow-lg'>
              <h1 className='text-center'>Categories</h1>
              <hr />
              <div>
                <div className='d-flex justify-content-evenly mb-2'>
                <button className='btn btn-white'><p>Monitors</p></button>
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

export default SearchDatapage