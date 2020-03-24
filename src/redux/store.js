import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const Middlewares = [];

if (process.env.NODE_ENV === 'development') {
    Middlewares.push(logger)
}


export const store = createStore(rootReducer, applyMiddleware(...Middlewares));
export const persistor = persistStore(store);
