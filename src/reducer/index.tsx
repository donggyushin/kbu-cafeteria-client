import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import user from './user'

const intialState = {}

const allReducers = combineReducers({
    user
})


// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, intialState, composeEnhancer(applyMiddleware(thunk)))

export default store