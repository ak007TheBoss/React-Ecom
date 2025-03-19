import React, { useState } from 'react'
import Navbarcomponent from '../components/Navbarcomponent'
import '../css/homepage.css'
import { useDispatch, useSelector } from 'react-redux'
import { sum } from '../slices/cartsumSlice'
const Homepage = () => {
    const dispatch = useDispatch()
    const cartsum = useSelector((state)=>state.cartsum.cartnum)
    const sendcartData =()=>{
      dispatch(sum(1))
    }

    const cardData = useSelector((state)=>state.carddatashow.showData)
  return (
    <>
    <Navbarcomponent/>
    <div className='container' style={{marginRight:"75px"}}>
        <div className='row'>
          {
          cardData && cardData.map((data,index)=>(
              <>
              <div className='col-md-4 my-3' key={index}>
                <div className='card p-3'style={{width:"20rem"}} >
                    <img src={data.img} alt="" />
                     <hr />
                        <div className='card-body'>
                          <div>
                          <h1>Name:{data.name}</h1>
                          </div>

                        <div>
                            <h1>Price:{data.price}</h1>
                        </div>
                        <div>
                          <h1>Aailable:{data.onstock}</h1>
                        </div>
                        <div>
                        <button className='btn btn-success' onClick={sendcartData}>Add to cart</button>
                        </div>
                        </div>
                </div>
              </div>        
              </>
          ))

          }
        </div>
    </div>
    </>
  )
}

export default Homepage