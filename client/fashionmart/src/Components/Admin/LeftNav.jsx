/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from "react-router-dom"
function LeftNav() {
  return (
    <>
    <div className="list-group">
    <h4 className='background text-light text-center p-2'>Menu</h4>
  <Link to="/admin-home" className="list-group-item list-group-item-action mb-1 text-dark bgcolor">Home</Link>
  <Link to="/admin-users" className="list-group-item list-group-item-action mb-1 text-dark bgcolor">Users</Link>
  <Link to="/admin-maincategory" className="list-group-item list-group-item-action mb-1 text-dark bgcolor">MainCategory</Link>
  <Link to="/admin-subcategory" className="list-group-item list-group-item-action mb-1 text-dark bgcolor">SubCategory</Link>
  <Link to="/admin-brand" className="list-group-item list-group-item-action mb-1 text-dark bgcolor">Brands</Link>
  <Link to="/admin-product" className="list-group-item list-group-item-action mb-1 text-dark bgcolor">Product</Link>
  <Link to="/admin-checkout" className="list-group-item list-group-item-action mb-1 text-dark bgcolor">Checkout</Link>
  <Link to="/admin-contact" className="list-group-item list-group-item-action mb-1 text-dark bgcolor">Contact</Link>
  <Link to="/admin-newslatter" className="list-group-item list-group-item-action mb-1 text-dark bgcolor">Newslatter</Link>
</div></>
  )
}

export default LeftNav