import { UpdateObject } from './utility'

const INITIAL_STATE = {
  name: '',
  password: '',
  confirmpassword: '',
  image: '',
  nameinuse: false,
  namelengtherror: false,
  dontmatchpassword: false,
  passwordlengtherror: false,
  limitteamserror: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return UpdateObject(state, {name: action.payload})
    case 'CHANGE_PASSWORD':
      return UpdateObject(state, {password: action.payload})
    case 'CONFIRM_PASSWORD':
      return UpdateObject(state, {confirmpassword: action.payload})
    case 'NAME_IN_USE':
      return UpdateObject(state, {nameinuse: true})
    case 'NAME_NOT_IN_USE':
      return UpdateObject(state, {nameinuse: false})
    case 'NAME_LENGTH_ERROR':
      return UpdateObject(state, {namelengtherror: true})
    case 'PASSWORD_DONT_MATCH':
      return UpdateObject(state, {dontmatchpassword: true})
    case 'PASSWORD_LENGTH_ERROR':
      return UpdateObject(state, {passwordlengtherror: true})
    case 'EXCEEDS_LIMIT_TEAMS':
      return UpdateObject(state, {limitteamserror: true})
    default: return state
  }
}
