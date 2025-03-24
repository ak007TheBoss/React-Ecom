import React, { useState } from 'react'
import Navbarcomponent from '../components/Navbarcomponent'
import { useSelector } from 'react-redux'
const Singlepage = () => {

        const [quantity,setquantity] = useState(0)
        const addquantity=()=>[
            setquantity(quantity+1)
        ]
        const subquantity=()=>[
            setquantity(quantity-1)
        ]
    const data = useSelector((state)=>state.singleproduct.singleData)
  return (
    <>
    <Navbarcomponent/>
    <div className='container shadow-lg'>
        <div className='row my-3'>
            
                        <div className='col-md-6 my-3'>
                            <img src={data.img} style={{width:"30rem"}} />
                        </div>
                        <div className='col-md-6 my-3'>
                            <h1>{data.name}</h1>
                            <h3>{data.price}</h3>
                            <h3>{data.ontock}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorum nisi inventore nulla incidunt laborum facilis laboriosam corporis, iure optio corrupti, iste blanditiis sequi explicabo doloribus aliquam deleniti ipsam reprehenderit?</p>
                            <div className='p-3'>
                                    <h3>No. Items,</h3>
                                    <div className='d-flex justify-content-start'>
                                    <button className='btn btn-secondary me-2' onClick={addquantity}>+</button>
                                    <h5 className='shadow-lg'>{quantity}</h5>
                                    <button className={`btn ms-2 ${quantity > 0 ? "btn-secondary" : "btn-secondary disabled"}`} onClick={subquantity} >-</button>
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