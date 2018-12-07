import { UpdateObject } from './utility'

const INITIAL_STATE = {
  data: {}
}

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return UpdateObject(state, {data: action.payload})
    default: return state
  }
}

export default user
