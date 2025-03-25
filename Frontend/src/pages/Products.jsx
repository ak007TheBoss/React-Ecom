import React,{useState} from 'react'
import Navbarcomponent from '../components/Navbarcomponent'
import '../css/products.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartdata, sum } from '../slices/cartsumSlice'
import { Link } from 'react-router-dom'
import { showsingleData } from '../slices/singlepageSlice'

const Products = () => {
  const [searchData,setSearchData] = useState("")
  const cardData = useSelector((state)=>state.carddatashow.showData)
  const [searchproducts,setSearchProducts] = useState(cardData)
  const [buttonSearch,setbuttonSearch] = useState(cardData)
  const dispatch = useDispatch()
  const sendcartData =(data)=>{
    dispatch(sum(1))
    dispatch(cartdata(data))
  }
  const searchdatas = () =>{
    let filterData = cardData.filter(data=>
      data.name.toLowerCase().includes(searchData.toLowerCase())

    )
    setSearchProducts(filterData)
    setSearchData('')
  }
  
      const singleData = (data)=>{
        dispatch(showsingleData(data))
      }
  return (
    <>
      
      <Navbarcomponent/>
      <div className='container'>
        <div className='row'>

          <div className='col-md-3'>
            <div className='my-3 d-flex justify-content-evenly'>
              <input type="text" name="" id="" placeholder='Search our products' className='form-control' onChange={(e)=>setSearchData(e.target.value)} value={searchData}/>
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
              searchproducts && searchproducts.map((data,index)=>(
                  <div className='col-md-4 my-3' key={index}>
                  <div className='card p-3'style={{width:"15rem"}}>
                        <img src={data.img} alt="" style={{height:"200px",width:"100%"}}/>
                        <hr />
                            <div className='card-body'>
                              <div>
                              <h5>Name:{data.name}</h5>
                              </div>

                            <div>
                                <h5>Price:{data.price}</h5>
                            </div>
                            <div>
                              <h5>Aailable:{data.onstock}</h5>
                            </div>
                            <div className='d-flex justify-content-start'>
                            <button className='btn btn-success' onClick={()=>sendcartData(data)}>Add to cart</button>
                            <Link to="/singlepage">
                            <button className='btn btn-secondary ms-2' onClick={()=>singleData(data)}>View More</button>
                            </Link>
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