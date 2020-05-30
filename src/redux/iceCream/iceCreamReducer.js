import {BUY_ICECREAM} from './iceCreamTypes'

const initialState = {
    noOfIceCream : 10,
}

const iceCreamReducer = (state=initialState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            noOfIceCream : state.noOfIceCream - 1
        }
        default : return state
    }
}

export default iceCreamReducer;