import React from 'react'

import '../styles/MenuMobile.scss'

const MenuMobile = () => {
  return (
    <div className="mobile-menu" >
      <h2>CATEGORIES</h2>
      <ul>
        {/* <li><a href="/">CATEGORIES</a></li> */}
        <li><a href="/">All</a></li>
        <li><a href="/">Clothes</a></li>
        <li><a href="/">Electronics</a></li>
        <li><a href="/">Furnitures</a></li>
        <li><a href="/">Toys</a></li>
        <li><a href="/">Other</a></li>
      </ul>

      <ul>
        <li><a href="/">My orders</a></li>
        <li><a href="/">My account</a></li>
      </ul>

      <ul>
        <li><a className="email" href="/">platzi@gmail.com</a></li>
        <li><a className="sign-out" href="/">Sign out</a></li >
      </ul >
    </div >
  )
}
export default MenuMobile