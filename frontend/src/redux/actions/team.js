import axios from '../../axios-public'
export const getTeamDataSuccess = (payload) => ({
  type: 'GET_TEAM_DATA',
  payload
})

export const loadingOff = () => ({
  type: 'LOADING_OFF'
})

export const notFound = () => ({
  type: 'NOT_FOUND'
})

export const sendPasswordInput = (payload) => ({
  type: 'PASSWORD_INPUT',
  payload
})

export const teamPasswordSuccess = () => ({
  type: 'TEAM_PASSWORD_SUCCESS'
})

export const teamPasswordFail = () => ({
  type: 'TEAM_PASSWORD_FAIL'
})

export const getTeamData = (payload) => {
  return async dispatch => {
    try {
      const response = await axios.get(`/team/request/${payload}`)
      if (response) await dispatch(getTeamDataSuccess(response.data))
      await dispatch(loadingOff())
    } catch (err) {
      console.log(err.response.data)
      if (err.response.data === 'team not found in database') {
        dispatch(notFound())
        dispatch(loadingOff())
      }
    }
  }
}

export const enterTeam = (payload) => {
  return async dispatch => {
    try {
      const result = await axios.put('/team/join', payload)
      if (result) await dispatch(teamPasswordSuccess())
      window.location.reload(true)
    } catch (err) {
      console.log(err.response)
      if (err.response.data === 'Invalid team password') return dispatch(teamPasswordFail())
    }
  }
}
