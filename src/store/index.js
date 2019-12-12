import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import test from './reducers/test'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  test,
})

function configureStore () {
  return createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ))
}
const store = configureStore()

export default store
