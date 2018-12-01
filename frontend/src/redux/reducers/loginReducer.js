import { UpdateObject } from './utility'

const INITIAL_STATE = {
  auth: false
}

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'auth':
      return UpdateObject(state, {auth: !state.auth})
    default: return state
  }
}

export default auth
