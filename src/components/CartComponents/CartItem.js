import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Context } from '../../context'


function CartItem({product, dispatch}) {
    
    const {handleDetail, cartTotalFunc} = useContext(Context)

    return (
        <React.Fragment>
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <Link to='/details'>
                <img 
                    src={product.img} 
                    className='img-fluid img-cart'
                    alt={product.title}
                    onClick={() => handleDetail(product.id)}
                />
                </Link>
            </div>
            
            <div className="col-10 mx-auto col-lg-2 cart-item-text">
                <Link to='/details' onClick={() => handleDetail(product.id)}>
                {product.title}
                </Link>
            </div>
            <div className="col-10 mx-auto col-lg-2 cart-item-text">
                <span className="d-lg-none">Цена:</span>
                {product.price}
            </div>
            <div className="col-10 mx-auto col-lg-2 cart-item-text">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-dark" 
                            onClick={() => {
                                dispatch({
                                    type: 'decrement',
                                    payload: product.id
                                })
                                cartTotalFunc()
                            }}
                        >-</span>
                        <span className='btn btn-dark mx-1'>{product.count}</span>
                        <span className="btn btn-dark" 
                            onClick={() => {
                                dispatch({
                                    type: 'increment',
                                    payload: product.id
                                })
                                cartTotalFunc()
                            }}
                        >+</span>

                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 cart-item-text">
                <div 
                    className="cart-icon" 
                    onClick={() => {
                        dispatch({
                            type: 'removeFromCart',
                            payload: product.id
                        })
                        cartTotalFunc()
                    }} 
                >
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 cart-item-text">
                <strong className="d-lg-none">Стоимость: </strong>
                <strong>{product.total}</strong>
            </div>
        </div>
        <hr/>
        </React.Fragment>
    )
}
CartItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        group: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        inCart: PropTypes.bool.isRequired
    }), 
    dispatch: PropTypes.func.isRequired,
    cartTotalFunc: PropTypes.func.isRequired
}

export default CartItem