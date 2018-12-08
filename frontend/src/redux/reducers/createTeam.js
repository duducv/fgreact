import { UpdateObject } from './utility'

const INITIAL_STATE = {
  name: '',
  password: '',
  confirmpassword: '',
  image: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return UpdateObject(state, {name: action.payload})
    case 'CHANGE_PASSWORD':
      return UpdateObject(state, {password: action.payload})
    case 'CONFIRM_PASSWORD':
      return UpdateObject(state, {confirmpassword: action.payload})
    default: return state
  }
}
