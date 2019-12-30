import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import user from './user'
import loading from './loading'

const intialState = {}

const allReducers = combineReducers({
    user,
    loading
})


// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, intialState, composeEnhancer(applyMiddleware(thunk)))

export default store