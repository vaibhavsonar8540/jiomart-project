import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Grocery from './Pages/Grocery'
import Cart from './Pages/Cart'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/grocery' element={<Grocery/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes