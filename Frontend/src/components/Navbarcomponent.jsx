import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../imgs/logo.jpg'
import { searched } from '../slices/pushdataSlice'
const Navbarcomponent = () => {
  const cartnum = useSelector((state)=>state.cartsum.cartnum)
  const searchData = useSelector((state)=>state.carddatashow.showData)
  const [display,showDisplay] = useState('')

  const navigate = useNavigate();
  const sendData = ()=>{ 
    if(display){
    navigate("/searchdata", {state:"hello"})
    }
    console.log("nav",display)

  }

  const showedDisplay=(e)=>{
    showDisplay(e)
    // console.log(display)
    showDisplay('')
    sendData()
    
  }
  



  return (
    <>
    <div className=' container-fluid bg-black'>
    <div className="navbar position-sticky top-0 z-1 nav">
      <div className="col-md-4">
        <div className="d-flex  px-3">
            <img src={logo} alt="" style={{height:"75px",width:"75px"}} />
        </div>
      </div>
      <div className="col-md-4">
        <div>
          <ul className="d-flex">
            <li className="list-unstyled p-3"><Link to="/" className="text-white text-decoration-none "><button
                  className="btn btn-black"  style={{color:"white"}}>Home</button></Link></li>
            <li className="list-unstyled p-3"><Link to="/products" className="text-white text-decoration-none"><button
                  className="btn btn-black" style={{color:"white"}}>Products</button></Link></li>
            <li className="list-unstyled p-3"><Link to="/sales" className="text-white text-decoration-none"><button
                  className="btn btn-black" style={{color:"white"}}>Sales</button></Link></li>
            <li className="list-unstyled p-3"><Link to="/services" className="text-white text-decoration-none"><button
                  className="btn btn-black" style={{color:"white"}}>Services</button></Link></li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="d-flex justify-content-end">
          <Link to="/login"><button className="btn btn-black me-3"style={{color:"white"}}>Login</button></Link>
          <Link to="/signup"><button className="btn btn-black"style={{color:"white"}}>Signup</button></Link>
        </div>
      </div>
    </div>
    </div>
    <div className='container-fluid bg-secondary' style={{height:"80px"}}>
        <div className='row'>
            <div className='col-md-4 my-3'>
              
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                English
              </button>
              <ul className="dropdown-menu">
                  <li>English</li>
                  <li>Nepali</li>
              </ul>
            </div>
              
            </div>
            <div className='col-md-4 d-flex justify-content-evenly my-3'>
               <input type="text" name="" id="" placeholder='Search' className='form-control mx-2' onChange={(e)=>showDisplay(e.target.value)} value={display}/>
              <Link to="/searchdata"><button className='btn btn-success' onClick={showedDisplay}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg></button></Link>
            </div>
            <div className='col-md-4 my-3 d-flex justify-content-end'>
             <Link to='/cart'> <button className='btn btn-success'>Cart : {cartnum}</button></Link>
            </div>
          
        </div>
        
    </div>
    </>
  )
}

export default Navbarcomponent