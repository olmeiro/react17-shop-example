import React, { useState } from 'react'

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((_, idx) => idx != indexValue)
    })
  }
  return {
    state,
    addToCart,
    removeFromCart
  }
}

export default useInitialState;
