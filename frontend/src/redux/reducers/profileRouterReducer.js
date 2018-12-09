import { UpdateObject } from './utility'

const INITIAL_STATE = {
  location: 'index'
}

const profileLocation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_TEAM':
      return UpdateObject(state, {location: action.payload})
    default: return state
  }
}

export default profileLocation
