import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import CartItemContext from './context/CartItemContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {cartList: []}

  addToCart = product => {
    this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
  }

  deleteProduct = () => {}

  render() {
    const {cartList} = this.state
    return (
      <BrowserRouter>
        <CartItemContext.Provider
          value={{
            cartList,
            addToCart: this.addToCart,
            deleteProduct: this.deleteProduct,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/products" component={Products} />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartItemContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
