import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    user: userReducer
})

export default rootReducer