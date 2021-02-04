import React, {useContext} from 'react'
import Title from './Title'
import CartColumns from './CartComponents/CartColumns'
import CartTotal from './CartComponents/CartTotal' 
import {Context} from '../context'
import CartList from './CartComponents/CartList'


function Cart() {

    const {state, cartProductsArr, increment, decrement, removeFromCart} = useContext(Context)

    return (
        <div className='cart-title'>
            {cartProductsArr.length === 0 ?
            <Title name='Сейчас Ваша Корзина' title='Пуста' />
            :
            <React.Fragment>
                <Title name='Ваша' title='Корзина' />
                <CartColumns />
                <CartList data={cartProductsArr} functions={{increment, decrement, removeFromCart}} />
                
                <CartTotal />
                

            </React.Fragment>
            }
        </div>
    )
}

export default Cart