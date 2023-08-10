import React from 'react'
import {BrowserRouter as BR,Routes,Route} from "react-router-dom"
import AdminHome from './Admin/AdminHome'

import AdminAddMaincategory from './Admin/AdminAddMaincategory'
import AdminMaincategory from './Admin/AdminMaincategory'
import AdminUpdateMaincategory from './Admin/AdminUpdateMaincategory'

import AdminAddSubcategory from './Admin/AdminAddSubcategory '
import AdminUpdateSubcategory from './Admin/AdminUpdateSubcategory '
import AdminSubcategory from './Admin/AdminSubcategory '

import AdminBrand from './Admin/AdminBrand'
import AdminAddBrand from './Admin/AdminAddBrand'
import AdminUpdateBrand from './Admin/AdminUpdateBrand'

import AdminProduct from './Admin/AdminProduct'
import AdminAddProduct from './Admin/AdminAddProduct'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'

import AdminNewsLatter from './Admin/AdminNewsLatter'
import AdminContactPage from './Admin/AdminContactPage'

import AdminUsers from './Admin/AdminUsers'
import Cart from './Cart'
import Checkout from './Checkout'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Profile from './Profile'
import Shop from './Shop'
import Signup from './Signup'
import SingleProductPage from './SingleProductPage'
import UpdateProfile from './UpdateProfile'
import AdminSingleContact from './Admin/AdminSingleContact'
import AdminCheckoutPage from './Admin/AdminCheckoutPage'
import AdminSingleCheckout from './Admin/AdminSingleCheckout'
import Confirmation from './Confirmation'
import ForgetUserName from './ForgetUserName'
import ForgetOTP from './ForgetOTP'
import ForgetPassword from './ForgetPassword'
import Payment from './Payment'

function Main() {
  return (
     <>
     <div className='container-fluid'>
        <BR>
           <Navbar/>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Shop/:mc/:sc/:br/:search' element={<Shop/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Single-product-page/:_id' element={<SingleProductPage/>}/>
            <Route path='/contactPage' element={<Contact/>}/>
            <Route path='/forget-username' element={<ForgetUserName/>}/>
            <Route path="/forget-otp" element={<ForgetOTP/>}/>
            <Route path="/forget-password" element={<ForgetPassword/>}/>
            <Route path='/Checkout' element={!(localStorage.getItem("login"))?<Login/>:<Checkout/>}/>
            <Route path='/Update-Profile' element={!(localStorage.getItem("login"))?<Login/>:<UpdateProfile/>}/>
            <Route path='/confirm' element={!(localStorage.getItem("login"))?<Login/>:<Confirmation/>}/>
            <Route path='/Cart' element={!(localStorage.getItem("login"))?<Login/>:<Cart/>}/>
            <Route path='/Profile' element={!(localStorage.getItem("login"))?<Login/>:<Profile/>}/>
            <Route path='/payment/:_id' element={!(localStorage.getItem("login"))?<Login/>:<Payment/>}/>


            <Route path='/admin-home' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminHome/>}/>
            <Route path='/admin-users' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminUsers/>}/>
            <Route path='/admin-maincategory' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminMaincategory/>}/>
            <Route path='/admin-add-maincategory' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminAddMaincategory/>}/>
            <Route path='/admin-update-maincategory/:_id' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminUpdateMaincategory/>}/>
            <Route path='/admin-subcategory' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminSubcategory/>}/>
            <Route path='/admin-add-subcategory' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminAddSubcategory/>}/>
            <Route path='/admin-update-subcategory/:_id' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminUpdateSubcategory/>}/>
            <Route path='/admin-brand' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminBrand/>}/>
            <Route path='/admin-add-brand' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminAddBrand/>}/>
            <Route path='/admin-update-brand/:_id' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminUpdateBrand/>}/>
            <Route path='/admin-product' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminProduct/>}/>
            <Route path='/admin-add-product' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminAddProduct/>}/>
            <Route path='/admin-update-product/:_id' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminUpdateProduct/>}/>
            <Route path='/admin-newslatter' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminNewsLatter/>}/>
            <Route path='/admin-contact' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminContactPage/>}/>
            <Route path='/admin-single-contact/:_id' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminSingleContact/>}/>
            <Route path='/admin-checkout' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminCheckoutPage/>}/>
            <Route path='/admin-single-checkout/:_id' element={!(localStorage.getItem("login"))?<Login/>:localStorage.getItem("role")==="User"?<Profile/>:<AdminSingleCheckout/>}/>

           </Routes>
           <Footer/>
        </BR>
      </div>
     </>
  )
}

export default Main