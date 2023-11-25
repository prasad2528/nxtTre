import React from 'react'

const CartItemContext = React.createContext({
  cartList: [],
  addToCart: () => {},
  deleteProduct: () => {},
})

export default CartItemContext
