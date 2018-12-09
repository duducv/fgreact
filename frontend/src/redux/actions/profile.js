import axios from '../../axios-public'

export const profileRoutes = (payload) => ({
  type: 'CREATE_TEAM',
  payload
})

export const fetchUserTeam = (payload) => {
  return dispatch => {
    axios.get(`/team/${payload}`).then(result => console.log(result)).catch(err => console.log(err))
  }
}

