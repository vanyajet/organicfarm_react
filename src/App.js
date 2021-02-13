import React, {useEffect, useReducer, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import { Context } from './context'
import {storeProducts, detailProduct} from './data'
import reducer from './reducer'
import Loader from './Loader'

const ProductList = React.lazy(() => import('./components/ProductList'))
const Details = React.lazy(() => import('./components/Details'))
const Cart = React.lazy(() => import('./components/Cart'))
const Default = React.lazy(() => import('./components/Default'))
const Contact = React.lazy(() => import('./components/Contact'))
const About = React.lazy(() => import('./components/About'))


function App() {

  const [state, dispatch] = useReducer(reducer, storeProducts, () => {
    const localData = localStorage.getItem('state')
    if (localData) {
      return JSON.parse(localData)
    }
  })

  let [detailedProduct, setDetailedProduct] = useState(detailProduct)

  let [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const localCartTotal = localStorage.getItem('cartTotal')
    if (localCartTotal) {
      setCartTotal(JSON.parse(localCartTotal))
    }
  }, [])


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

  const handleDetail = (id) => {
    const product = state.find(item => item.id === id)
    setDetailedProduct(() => {
      return {detailedProduct:product}})
  }

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
    localStorage.setItem('cartTotal', JSON.stringify(cartTotal))
  }, [state, cartTotal])

  return (
    <Context.Provider value={{
      cartTotalFunc,
      cartTotal,
      handleDetail,
      detailedProduct,
      state,
      dispatch
    }} >
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/'> <React.Suspense fallback={<Loader/>}> <ProductList state={state} dispatch={dispatch}/> </React.Suspense> </Route>
        <Route path='/details'> <React.Suspense fallback={<Loader/>}> <Details dispatch={dispatch}/> </React.Suspense>  </Route>
        <Route path='/cart'> <React.Suspense fallback={<Loader/>}> <Cart state={state} dispatch={dispatch} /> </React.Suspense> </Route>
        <Route path='/contact'> <React.Suspense fallback={<Loader/>}> <Contact/> </React.Suspense> </Route>
        <Route path='/about'> <React.Suspense fallback={<Loader/>}> <About/> </React.Suspense> </Route>
        <Route > <React.Suspense fallback={<Loader/>}> <Default /> </React.Suspense> </Route>

      </Switch>

    </React.Fragment>
    </Context.Provider>
  )
}

export default App
