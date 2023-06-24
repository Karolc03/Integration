import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunkMiddleWare from 'redux-thunk'

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleWare))
);

export default store;