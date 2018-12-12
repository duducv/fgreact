import { UpdateObject } from './utility'

const INITIAL_STATE = {
  data: '',
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_TEAM_DATA':
      return UpdateObject(state, {data: action.payload})
    case 'LOADING_OFF':
      return UpdateObject(state, {loading: false})
    default: return state
  }
}
