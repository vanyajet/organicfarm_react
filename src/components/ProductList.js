import React from 'react'
import Product from './Product'
import Title from './Title'
import PropTypes from 'prop-types'

function ProductList({state, dispatch}) {


    return (
        <React.Fragment>
            <div className="main">
                <div className="container">
                    <Title name='Наша' title='Продукция'/>
                    <div className="row">
                        <div className="col-12">
                            <h3>Микрозелень</h3>
                            <hr/>
                        </div>
                        {state.map(product => {
                            if (product.group === 'micro')
                            {
                                return <Product key={product.id} product={product} dispatch={dispatch} />
                            }
                            return null
                            })
                        }

                    </div>
                    <div className="row">
                        <div className="col-12 my-2">
                            <h3>Продукция комбината "Тепличный"</h3>
                            <hr/>
                        </div>
                        {state.map(product => {
                            if (product.group === 'vegs')
                            {
                                return <Product key={product.id} product={product} dispatch={dispatch} />
                            }
                            return null
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-12 my-2">
                            <h3>Наборы для выращивания</h3>
                            <hr/>
                        </div>
                        {state.map(product => {
                            if (product.group === 'nabor')
                            {
                                return <Product key={product.id} product={product} dispatch={dispatch} />
                            }
                            return null
                            })
                        }
                    </div>
                </div> 
            </div>
        </React.Fragment>

    )
}

ProductList.propTypes = {
    state: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired 
}


export default ProductList