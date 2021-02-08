import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

function CartList({state, dispatch}){
    return (
        <div className="container-fluid">
            {state.map(product => {
                if (product.inCart) {
                return <CartItem key={product.id} product={product} dispatch={dispatch}/>
                }
            })} 
        </div>
    )
}
CartList.propTypes = {
    state: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired
}

export default CartList