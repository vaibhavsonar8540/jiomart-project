import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Grocery from './Pages/Grocery'
import Cart from './Pages/Cart'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/grocery' element={<Grocery/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes