import { UpdateObject } from './utility'

const INITIAL_STATE = {
  auth: false,
  spinner: false
}

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTH':
      return UpdateObject(state, {auth: true, authFail: false})
    case 'SPINNER_ON':
      return UpdateObject(state, {spinner: true})
    case 'SPINNER_OFF':
      return UpdateObject(state, {spinner: false})
    default: return state
  }
}

export default auth
