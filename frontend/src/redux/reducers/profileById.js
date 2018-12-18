import { UpdateObject } from './utility'

const INITIAL_STATE = {
  data: {
    team: {
      _id: 'null'
    }
  }
}

const userById = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STORE_USER_BY_ID':
      return UpdateObject(state, {data: action.payload})
    default: return state
  }
}

export default userById
