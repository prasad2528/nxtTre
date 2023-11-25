import CartItem from '../CartItem'
import CartItemContext from '../../context/CartItemContext'

import './index.css'

const CartListView = () => (
  <CartItemContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </CartItemContext.Consumer>
)

export default CartListView
