/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from 'react';
import "../assets/css/mystyle.css"
import pic from "../assets/images/profile.jpg"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';



import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  var [search, setsearch] = useState("None")
  var navigate = useNavigate()
  async function logout() {
    var item = {
      username: localStorage.getItem("username"),
      token: localStorage.getItem("token")
    }
    var response = await fetch("/logout", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(item)
    })
    response = await response.json()
    if (response.result === "Done") {
      localStorage.clear()
      navigate("/login")
    }
    else
      alert(response.message)
  }
  async function logoutAll() {
    var item = {
      username: localStorage.getItem("username"),
      token: localStorage.getItem("token")
    }
    var response = await fetch("/logoutall", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(item)
    })
    response = await response.json()
    if (response.result === "Done") {
      localStorage.clear()
      navigate("/login")
    }
    else
      alert(response.message)
  }
  async function postData(e){
    e.preventDefault()
    navigate(`/shop/All/All/All/${search}`)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top mb-2">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">Fashion Mart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="shop/All/All/All/None">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contactPage">Contact</Link>
              </li>
            </ul>
            <form className="d-flex w-100" role="search" onSubmit={postData}>
              <input className="form-control me-2" name='search' onChange={(e) => setsearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {localStorage.getItem("login") ?
                <li className="nav-item dropdown w-100">
                  <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={pic} width="40px" height="40px" style={{ borderRadius: "50%" }}></img>
                  </Link>
                  <ul className="dropdown-menu">
                  {localStorage.getItem("role")==="User"?                  
                    <li><Link className="dropdown-item text-primary" to="/profile"><AccountCircleIcon />Profile</Link></li>:
                    <li><Link className="dropdown-item text-primary" to="/admin-home"><AccountCircleIcon />Profile</Link></li>
                  }
                    <li><Link className="dropdown-item text-primary" to="/cart"><ShoppingCartIcon /> Cart</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item text-primary" onClick={logout}><LogoutIcon />Logout</button></li>
                    <li><button className="dropdown-item text-primary" onClick={logoutAll}>Logout From All</button></li>
                  </ul>
                </li> :
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/login">Login</Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;