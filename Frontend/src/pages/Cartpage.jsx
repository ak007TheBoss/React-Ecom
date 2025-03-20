import React, { useState } from 'react'
import Navbarcomponent from '../components/Navbarcomponent'
import { useSelector } from 'react-redux'

const Cartpage = () => {

    const [quantity,setquantity] = useState(0)
    const addquantity=()=>[
        setquantity(quantity+1)
    ]
    const subquantity=()=>[
        setquantity(quantity-1)
    ]
    const carttabledata = useSelector((state)=>state.cartsum.cartData)
  return (
    <>
    <Navbarcomponent/>
        <div className='container'>
            <div className='row'>
                    <table>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Onstock</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carttabledata && carttabledata.map((data,index)=>(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td><img src={data.img} alt="" style={{height:"100px",width:"100px"}} /></td>
                                        <td>{data.name}</td>
                                        <td>{data.price}</td>
                                        <td>{data.onstock}</td>
                                        <td>
                                            <div className='d-flex justify-content-evenly mb-3'>
                                            <button className='btn btn-secondary p-3' key={index} onClick={addquantity}>+</button>
                                            <p>{quantity}</p>
                                            <button className={`btn ${quantity > 0 ? "btn-secondary" : "btn-secondary disabled"}`} key={index} onClick={subquantity} >-</button>
                                            </div>
                                            <div className='mb-3'>
                                            <button className='btn btn-success ms-3 '>Buy Now</button>
                                            <button className='btn btn-danger ms-3 '>Remove</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>

            </div>
        </div>


    </>
  )
}

export default Cartpage