import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import pokeReducer from './reducer/pokeReducer'

const reducer = combineReducers({
  pokeReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store