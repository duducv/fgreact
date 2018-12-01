import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import auth from './reducers/loginReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(combineReducers({
    auth
  }), composeEnhancers(applyMiddleware(thunk)))
  return store
}
