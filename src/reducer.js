/* eslint-disable import/no-anonymous-default-export */

export default function(state, action) {


    switch (action.type){
        case 'addToCart':
            state.map(product => {
                if (product.id === action.payload){
                    product.inCart = true
                    if (product.inCart){
                        product.count = 1
                        product.total = product.price
                    }
                }
                return product
            })
            return state
        default:
            return state
    }
}

