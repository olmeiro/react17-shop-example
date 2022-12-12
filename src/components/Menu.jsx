import React from 'react'

import '../styles/Menu.scss'

const Menu = () => {
  return (
    <div class="Menu-container">
      <ul>
        <li>
          <a class="title" href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  )
}
export default Menu