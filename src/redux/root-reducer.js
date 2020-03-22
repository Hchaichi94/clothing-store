import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import cartReducer from './cart/cartReduce'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistSonfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer

})
export default persistReducer(persistSonfig, rootReducer)