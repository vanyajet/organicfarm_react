import React from 'react'
import Title from './Title'
import CartColumns from './CartComponents/CartColumns'
import CartTotal from './CartComponents/CartTotal' 
import CartList from './CartComponents/CartList'


function Cart({state, dispatch}) {

    return (
        <div className='cart-title'>

            {state.every(product => product.inCart !== true) ?
                <Title name='Сейчас Ваша Корзина' title='Пуста' />
            :
            <React.Fragment>
                <Title name='Ваша' title='Корзина' />
                <CartColumns />
                <CartList state={state} dispatch={dispatch} />
                
                <CartTotal dispatch={dispatch} />
                

            </React.Fragment>
            }
        </div>
    )
}

export default Cart