import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Grocery from './Pages/Grocery'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/grocery' element={<Grocery/>}/>
            
        </Routes>
    </div>
  )
}

export default AllRoutes