import axios from '../../axios-public'

export const changePassword = (payload) => ({
  type: 'CHANGE_PASSWORD',
  payload
})

export const passwordConfirmation = (payload) => ({
  type: 'CONFIRM_PASSWORD',
  payload
})

export const passwordDontMatch = () => ({
  type: 'PASSWORD_DONT_MATCH'
})

export const passwordLengthError = () => ({
  type: 'PASSWORD_LENGTH_ERROR'
})

export const nameNotInUse = () => ({
  type: 'NAME_NOT_IN_USE'
})

export const nameInUse = () => ({
  type: 'NAME_IN_USE'
})

export const changeName = (payload) => {
  return async dispatch => {
    try {
      await dispatch({type: 'CHANGE_NAME', payload})
      let result = await axios.get(`/team/${payload}`)
      if (result.data) await dispatch(nameNotInUse())
    } catch (err) {
      if (err.response.data === 'already in database') dispatch(nameInUse())
    }
  }
}

export const createNewTeam = (payload) => {
  return async dispatch => {
    try {
      let result = await axios.post('/team/new', payload)
      console.log(result)
    } catch (err) {
      if (err.response.data === 'team name already in use') dispatch(nameInUse())
      if (err.response.data === 'password do not match') dispatch(passwordDontMatch())
      if (err.response.data === 'password length error') dispatch(passwordLengthError())
      console.log(err.response.data)
    }
  }
}
