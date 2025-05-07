import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Description from './Pages/DescriptionPage'
import PrivatePage from './Components/PrivatePage'
import Drinks from './Grocery/Drinks'
import IceFrozen from './Grocery/IceFrozen'
import FruitVegies from './Grocery/FruitVegies'
import GroceryData from './Grocery/GroceryData'
import Lifestyle from './HomeLife/Lifestyle'
import Electronics from './Electronics/electronics'
import Fashion from './Fashion/Fashion'
import Industry from './Industry/Industry'
import Jewellery from './Jewellery/Jewellery'
import Wellness from './Wellness/Wellness'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/grocery' element={<GroceryData/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path="/product/:category/:id" element={<PrivatePage><Description/></PrivatePage>}/>
            <Route path='/drink' element={<Drinks/>}/>
            <Route path='/icefrozen' element={<IceFrozen/>}/>
            <Route path='/fruitVege' element={<FruitVegies/>}/>
            <Route path='/life' element={<Lifestyle/>}/>
            <Route path='/electronics' element={<Electronics/>}/>
            <Route path='/fashion' element={<Fashion/>}/>
            <Route path='/industrial-supplies' element={<Industry/>}/>
            <Route path='/precious-jewellery' element={<Jewellery/>}/>
            <Route path='/wellness' element={<Wellness/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes