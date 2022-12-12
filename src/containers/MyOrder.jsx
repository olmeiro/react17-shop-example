import React from 'react'

import OrderItem from '../components/OrderItem'

import '../styles/MyOrder.scss'

import arrow from '@icons/flechita.svg'

const MyOrder = () => {
  return (
    <aside class="MyOrder">
      <div class="title-container">
        <img src={arrow} alt="arrow" />
        <p class="title">My order</p>
      </div>

      <div class="my-order-content">

        <OrderItem />
        {/* <!-- order --> */}
        <div class="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>

        <button class="primary-button">
          Checkout
        </button>
      </div>
    </aside >
  )
}
export default MyOrder