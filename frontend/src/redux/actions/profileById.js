import axios from '../../axios-public'

export const storePlayerData = (payload) => ({
  type: 'STORE_USER_BY_ID',
  payload
})

export const getPlayerById = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/userbyid/${payload}`, { withCredentials: true })
      console.log(response.data)
      if (!response.data.nickname) return
      await dispatch(storePlayerData(response.data))
    } catch (err) {
      console.log(err.response)
    }
  }
}
