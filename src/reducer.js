export default function reducer (state, action) {


    switch (action.type){

        case 'addToCart':
            return state.map(product => {
                if (product.id === action.payload){
                    product.inCart = true
                    if (product.inCart){
                        product.count = 1
                        product.total = product.price
                    }
                }
                return product
            })

        case 'increment':
            return state.map(product => {
                if (product.id === action.payload) {
                    product.count += 1
                    product.total = product.count * product.price
                    return product
                } return product
            })

        case 'decrement':
            return state.map(product => {
                if (product.id === action.payload) {
                    if (product.count === 1) {
                        product.inCart = false
                        product.count = 0
                        product.total = 0
                        return product
                    } else {
                        product.count -= 1
                        return product
                    }
                }
                return product
            })

        case 'removeFromCart':
            return state.map(product => {
                if (product.id === action.payload) {
                    product.inCart = false
                    product.count = 0
                    product.total = 0
                    return product
                }
                return product
            })
        
        case 'clearCart':
            state.forEach(product => {
                product.inCart = false
                product.count = 0
                product.total = 0
            })
            localStorage.setItem('state', JSON.stringify(state))

        default:
            return state
            
    }
}
