import React, {useContext} from 'react'
import Title from './Title'
import CartColumns from './CartComponents/CartColumns'
import CartTotal from './CartComponents/CartTotal' 
import {Context} from '../context'
import CartList from './CartComponents/CartList'
import Product from './Product'


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