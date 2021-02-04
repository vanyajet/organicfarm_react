import React, {useEffect, useReducer, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import { Context } from './context'
import {storeProducts, detailProduct, cartProducts} from './data'
import reducer from './reducer'
import Loader from './Loader'

const ProductList = React.lazy(() => import('./components/ProductList'))
const Details = React.lazy(() => import('./components/Details'))
const Cart = React.lazy(() => import('./components/Cart'))
const Default = React.lazy(() => import('./components/Default'))
const Contact = React.lazy(() => import('./components/Contact'))
const About = React.lazy(() => import('./components/About'))


function App() {


  const [state, dispatch] = useReducer(reducer, storeProducts)

  let [detailedProduct, setDetailedProduct] = useState(detailProduct)

  let [cartProductsArr, setCartProductsArr] = useState(cartProducts)

  let [cartTotal, setCartTotal] = useState()


  function pushToCart () {
    state.map(product => {
      if (product.inCart === true) {
        setCartProductsArr(() => {
          if (cartProductsArr.includes(product)){
            return cartProductsArr
          }
          cartProductsArr.push(product)
          return cartProductsArr
        })
      } return state
    });
  }

  function itemTotal(id) {
    setCartProductsArr(cartProductsArr.map(product => {
      if (product.id === id) {
        product.total = product.price*product.count
      }
      return product
    }))
  }

  const cartTotalFunc = () => {
    let total = 0
    state.map(product => {
      if (product.total > 0) {
        total += product.total
      }
      return total
    })
    setCartTotal(() => {
      return {cartTotal:total}
    })
  }

  function handleDetail (id) {
    const product = storeProducts.find(item => item.id === id)
    setDetailedProduct(() => {
      return {detailedProduct:product}})
  }

  function increment(id) {
    setCartProductsArr(cartProductsArr.map(product => {
      if (product.id === id) {
        product.count += 1
        itemTotal(id)
        cartTotalFunc()
      }
      return product
    }))
  }
  function decrement(id) {
      const item = cartProductsArr.find(product => product.id === id)
      if (item.count === 1) {
        removeFromCart(id)
        cartTotalFunc()
      }
      setCartProductsArr(cartProductsArr.map(product => {
        if (product.id === id) {
          product.count -= 1
          itemTotal(id)
          cartTotalFunc()
        }
        return product
      }))
  }
  function removeFromCart(id) { 
    state.map(product => {
      if (product.id === id) {
        product.inCart = false
        product.count = 0
        product.total = 0
      }
      return state
    })
    setCartProductsArr(cartProductsArr = cartProductsArr.filter(product => product.id !== id))
    cartTotalFunc()
  }

  function clearCart() {
    state.forEach(product => {
      product.inCart = false
      product.count = 0
      product.total = 0
    })
    cartProductsArr.length = 0
    console.log(state)
    return {state, cartProductsArr}
  }




  return (
    <Context.Provider value={{
      cartTotalFunc,
      cartTotal,
      cartProductsArr,
      pushToCart,
      handleDetail,
      detailedProduct,
      state,
      dispatch,
      increment,
      decrement,
      removeFromCart,
      clearCart
    }} >
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/'> <React.Suspense fallback={<Loader/>}> <ProductList state={state} dispatch={dispatch}/> </React.Suspense> </Route>
        <Route path='/details'> <React.Suspense fallback={<Loader/>}> <Details dispatch={dispatch}/> </React.Suspense>  </Route>
        <Route path='/cart'> <React.Suspense fallback={<Loader/>}> <Cart/> </React.Suspense> </Route>
        <Route path='/contact'> <React.Suspense fallback={<Loader/>}> <Contact/> </React.Suspense> </Route>
        <Route path='/about'> <React.Suspense fallback={<Loader/>}> <About/> </React.Suspense> </Route>
        <Route > <React.Suspense fallback={<Loader/>}> <Default /> </React.Suspense> </Route>

      </Switch>

    </React.Fragment>
    </Context.Provider>
  )
}

export default App
