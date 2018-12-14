import { UpdateObject } from './utility'

const INITIAL_STATE = {
  data: '',
  loading: true,
  notfound: false,
  passwordInput: null,
  passwordSuccess: false,
  passwordFail: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_TEAM_DATA':
      return UpdateObject(state, {data: action.payload})
    case 'LOADING_OFF':
      return UpdateObject(state, {loading: false})
    case 'NOT_FOUND':
      return UpdateObject(state, {notfound: true})
    case 'PASSWORD_INPUT':
      return UpdateObject(state, {passwordInput: action.payload})
    case 'TEAM_PASSWORD_SUCCESS':
      return UpdateObject(state, {passwordSuccess: true})
    case 'TEAM_PASSWORD_FAIL':
      return UpdateObject(state, {passwordFail: true})
    default: return state
  }
}
