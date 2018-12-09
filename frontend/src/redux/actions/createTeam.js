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

export const nameLengthError = () => ({
  type: 'NAME_LENGTH_ERROR'
})

export const exceedsLimitTeams = () => ({
  type: 'EXCEEDS_LIMIT_TEAMS'
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
      if (err.response.data === '"name" length must be at least 2 characters long' || err.response.data === '"name" is not allowed to be empty') dispatch(nameLengthError())
      if (err.response.data === 'team name already in use') dispatch(nameInUse())
      if (err.response.data === 'password do not match') dispatch(passwordDontMatch())
      if (err.response.data === '"password" is not allowed to be empty' || err.response.data === '"password" length must be at least 6 characters long') dispatch(passwordLengthError())
      if (err.response.data === 'each player could have only one team') dispatch(exceedsLimitTeams())
      console.log(err.response.data)
    }
  }
}
