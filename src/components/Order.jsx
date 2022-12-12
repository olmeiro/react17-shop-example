import React from 'react'

import '../styles/Order.scss'

import arrow from '@icons/flechita.svg'

const Order = () => {
  return (
    <div class="Order">
      <p>
        <span>06-12-2022</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src={arrow} alt="" />
    </div>
  )
}
export default Order