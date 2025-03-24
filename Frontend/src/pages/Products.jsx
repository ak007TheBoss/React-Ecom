import React from 'react'
import Navbarcomponent from '../components/Navbarcomponent'
import '../css/products.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartdata, sum } from '../slices/cartsumSlice'
const Products = () => {

  const cardData = useSelector((state)=>state.carddatashow.showData)

  const dispatch = useDispatch()
  const sendcartData =(data)=>{
    dispatch(sum(1))
    dispatch(cartdata(data))
  }
  return (
    <>

      <Navbarcomponent/>
      <div className='container'>
        <div className='row'>

          <div className='col-md-3'>
            
            <div className='my-3 d-flex justify-content-evenly shadow-lg'>
              <input type="text" name="" id="" placeholder='Search our products' className='form-control'/>
              <button className='btn btn-success'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg></button>
            </div>
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

          <div className='col-md-9'>
            <div className='row'>
            {
              cardData && cardData.map((data,index)=>(
                  <div className='col-md-4 my-3' key={index}>
                    <div className='card p-3'style={{width:"15rem"}} >
                        <img src={data.img} alt="" />
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
          </div>
        </div>

    </>

  )
}

export default Products