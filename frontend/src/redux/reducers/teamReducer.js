import { UpdateObject } from './utility'

const INITIAL_STATE = {
  data: '',
  loading: true,
  notfound: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_TEAM_DATA':
      return UpdateObject(state, {data: action.payload})
    case 'LOADING_OFF':
      return UpdateObject(state, {loading: false})
    case 'NOT_FOUND':
      return UpdateObject(state, {notfound: true})
    default: return state
  }
}
