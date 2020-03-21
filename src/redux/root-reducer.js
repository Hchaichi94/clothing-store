import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import cartReducer from './cart/cartReduce'

export default combineReducers({
    user: userReducer,
    cart: cartReducer

})