import axios from '../../axios-public'
export const getTeamDataSuccess = (payload) => ({
  type: 'GET_TEAM_DATA',
  payload
})

export const loadingOff = () => ({
  type: 'LOADING_OFF'
})

export const getTeamData = (payload) => {
  return async dispatch => {
    try {
      const response = await axios.get(`/team/request/${payload}`)
      if (response) await dispatch(getTeamDataSuccess(response.data))
      await dispatch(loadingOff())
    } catch (err) {
      console.log(err.response.data)
    }
  }
}
