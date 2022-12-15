import React, { useContext } from 'react'

import OrderItem from '../components/OrderItem'

import '../styles/MyOrder.scss'

import arrow from '@icons/flechita.svg'
import AppContext from '../context/AppContext'

const MyOrder = () => {

  const { state } = useContext(AppContext);

  const sumTotal = () => {

    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;

    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <aside class="MyOrder">
      <div class="title-container">
        <img src={arrow} alt="arrow" />
        <p class="title">My order</p>
      </div>

      <div class="my-order-content">
        <div className='cart-product-order'>
          {
            state.cart.map((item, idx) => (
              <OrderItem indexValue={idx} key={item.idx} product={item} />
            ))
          }
        </div>
        {/* <!-- order --> */}
        <div class="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>

        <button class="primary-button">
          Checkout
        </button>
      </div>
    </aside >
  )
}
export default MyOrder