import React, {useContext} from 'react'
import {Context} from '../context'
import {Link} from 'react-router-dom'


function Details({dispatch}) {

    const {detailedProduct} = useContext(Context)

    return (


        <div className="container py-5">
            
            <div className="row py-5">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize details-img">
                    <img src={detailedProduct.detailedProduct.img} className='img-fluid img-details' alt={detailedProduct.detailedProduct.title}/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>{detailedProduct.detailedProduct.title}</h2>
                    <hr/>
                    <h4 className='text-weight text-muted mt-3 mb-3'>
                        Вес: <span className='text-capitalize'>
                            {detailedProduct.detailedProduct.weight}
                        </span>
                    </h4>
                    <h4 className='text-green'>
                        <strong>Цена: {detailedProduct.detailedProduct.price}
                        <span className='mr-1 rub'>Р</span>
                        </strong>
                    </h4>
                    <hr/>
                    <h5 className="text-capitalize font-weight-bold mt-3 mb-0">
                        Описание:
                    </h5>
                
                    {detailedProduct.detailedProduct.properties.map(property => {
                            return <p className='text-properties mt-3'  key={property.id}> <strong>{property.title}: </strong>{property.value} </p>
                        })
                    }
                    <p className='text-properties mt-3'>*содержание питательных элементов указано на 100 г.</p>
                    <div>
                        <Link to='/' >
                            <button className='details-btn' >Вернуться к продуктам</button>
                        </Link>
                        <button 
                        className='details-btn-cart'
                        onClick={() => {
                            dispatch({
                            type: 'addToCart',
                            payload: detailedProduct.detailedProduct.id});
                        }}>
                            {detailedProduct.detailedProduct.inCart ? 'В Корзине!':'Добавить в корзину'}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Details