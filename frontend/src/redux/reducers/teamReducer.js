import { UpdateObject } from './utility'

const INITIAL_STATE = {
  data: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_TEAM_DATA':
      return UpdateObject(state, {data: action.payload})
    default: return state
  }
}
