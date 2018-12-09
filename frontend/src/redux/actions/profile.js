import axios from '../../axios-public'

export const profileRoutes = (payload) => ({
  type: 'CREATE_TEAM',
  payload
})

export const fetchUserData = (payload) => {
  return async dispatch => {
    try {
      let result = await axios.get(`/team/${payload}`)
      console.log(result)
    } catch (err) {

    }
  }
}
