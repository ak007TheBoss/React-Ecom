import React, { useState } from 'react'
import Navbarcomponent from '../components/Navbarcomponent'
import '../css/homepage.css'
import { useDispatch, useSelector } from 'react-redux'
import { sum,cartdata } from '../slices/cartsumSlice'
const Homepage = () => {
    const dispatch = useDispatch()
    const sendcartData =(data)=>{
      dispatch(sum(1))
      dispatch(cartdata(data))
    }

    const cardData = useSelector((state)=>state.carddatashow.showData)
  return (
    <>
    <Navbarcomponent/>
    <div className='container' style={{marginRight:"75px"}}>
        <div className='row'>
          {
          cardData && cardData.map((data,index)=>(
              <div className='col-md-4 my-3' key={index}>
                <div className='card p-3'style={{width:"20rem"}} >
                    <img src={data.img} alt="" className='image'/>
                     <hr />
                        <div className='card-body'>
                          <div>
                          <h3>Name:{data.name}</h3>
                          </div>

                        <div>
                            <h3>Price:{data.price}</h3>
                        </div>
                        <div>
                          <h3>Aailable:{data.onstock}</h3>
                        </div>
                        <div>
                        <button className='btn btn-success' onClick={()=>sendcartData(data)}>Add to cart</button>
                        </div>
                        </div>
                </div>
              </div>        
              
          ))

          }
        </div>
    </div>
    </>
  )
}

export default Homepage