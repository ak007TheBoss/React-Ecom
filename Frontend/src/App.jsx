import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import Sales from './pages/Sales'
import Services from './pages/Services'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cartpage from './pages/Cartpage'
import Singlepage from './pages/Singlepage'
const App = () => {
  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/sales' element={<Sales/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<Cartpage/>}/>
        <Route path='/singlepage' element={<Singlepage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App