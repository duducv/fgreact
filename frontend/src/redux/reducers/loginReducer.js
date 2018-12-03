import { UpdateObject } from './utility'

const INITIAL_STATE = {
  email: '',
  password: '',
  auth: false,
  spinner: false,
  authFail: false,
  token: null,
  userId: null
}

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTH':
      return UpdateObject(state, {auth: true, authFail: false})
    case 'SET_EMAIL':
      return UpdateObject(state, {email: action.payload})
    case 'SET_PASSWORD':
      return UpdateObject(state, {password: action.payload})
    case 'SPINNER_ON':
      return UpdateObject(state, {spinner: true})
    case 'SPINNER_OFF':
      return UpdateObject(state, {spinner: false})
    case 'AUTH_ERROR_MESSAGE':
      return UpdateObject(state, {authFail: true})
    case 'GET_TOKEN_AND_ID':
      return UpdateObject(state, {token: action.tokenId, userId: action.userId})
    default: return state
  }
}

export default auth
