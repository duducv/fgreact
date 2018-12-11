import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import auth from './reducers/loginReducer'
import user from './reducers/user'
import createTeam from './reducers/createTeam'
import profileLocation from './reducers/profileRouterReducer'
import team from './reducers/teamReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(combineReducers({
    auth,
    user,
    createTeam,
    profileLocation,
    team
  }), composeEnhancers(applyMiddleware(thunk)))
  return store
}
