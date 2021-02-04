import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

function CartList({data, functions}){
    return (
        <div className="container-fluid">
            {data.map(product => {
                return <CartItem key={product.id} product={product} functions={functions}/>
            })}
            
        </div>
        
    )
}
CartList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    functions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default CartList