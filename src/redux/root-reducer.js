import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import cartReducer from './cart/cartReduce'
import directoryReducer from './directory/directoryReduce.jsx'
import shopReducer from './shop/shopReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistSonfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer

})
export default persistReducer(persistSonfig, rootReducer)   