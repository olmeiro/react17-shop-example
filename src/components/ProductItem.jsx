import React, { useState, useContext } from 'react'

import '../styles/ProductItem.scss'

import addToCartSVG from '@icons/bt_add_to_cart.svg'
import addedToCartSVG from '@icons/bt_added_to_cart.svg'

import AppContext from '../context/AppContext'

const ProductItem = ({ product }) => {

  const { addToCart, removeFromCart, insideCart } = useContext(AppContext);

  const [added, setAdded] = useState(false);

  const handleClick = (item) => {
    added ? removeFromCart(item) : addToCart(item);
    setAdded(!added);
  }
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure
          onClick={() => handleClick(product)}
        >
          {insideCart(product.id)
            ? <img src={addedToCartSVG} alt={product.title} />
            : <img src={addToCartSVG} alt={product.title} />}
        </figure>
      </div>
    </div>
  )
}
export default ProductItem