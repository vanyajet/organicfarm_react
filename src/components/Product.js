import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Context} from '../context'


function Product({product, dispatch}) {

    const {handleDetail} = useContext(Context)

    return (
        <div className='product-wrapper col-10 col-md-6 col-lg-4 my-3' >
            <div className='card'>
                <div 
                    className="img-container p-5" 
                >
                   <Link to='/details' >
                       <img 
                        src={product.img}
                        alt='product'
                        className='card-img-top'
                        onClick={() => handleDetail(product.id)}
                       />
                   </Link>
                   <button 
                    className='cart-btn'
                    disabled={product.inCart ? true : false}
                    onClick={() => {
                        dispatch({
                            type: 'addToCart',
                            payload: product.id
                        })
                    }}
                    >
                        {(product.inCart) ? 
                        (<p 
                            className='text-capitalize mb-0'>
                        В корзине!</p>) : (<i area-hidden={(product.inCart) ? 'false' : 'true'} className='fas fa-cart-plus'/>)
                        }
                    </button>
                </div>
                <Link to='/details' >
                <div 
                    className="card-footer" 
                    onClick={() => handleDetail(product.id)}
                >
                    <p className='align-self-center mb-0'>
                        {product.title}
                    </p>
                    <h5 className='text-green mb-1'>
                        {product.price} 
                        <span className='mr-1 rub'>Р</span>
                    </h5>
                </div>
                </Link>
            </div>
        </div>
    )
    
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        group: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inCart: PropTypes.bool.isRequired
    }),  
    dispatch: PropTypes.func.isRequired 
}

export default Product