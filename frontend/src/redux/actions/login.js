import axios from 'axios'
import { fetchUserTeam } from './profile'

export const authSuccess = () => ({
  type: 'AUTH'
})

export const getTokenAndId = (tokenId, userId) => ({
  type: 'GET_TOKEN_AND_ID',
  tokenId,
  userId
})

export const getUserData = (payload) => ({
  type: 'GET_DATA',
  payload
})

export const logOut = () => {
  return async (dispatch) => {
    try {
      await axios.get('http://localhost:3000/api/logout')
    } catch (err) {
      console.log(err)
    }
  }
}

export const logOn = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/api/me', { withCredentials: true })
      console.log(response.data)
      if (!response.data.nickname) return
      await dispatch(getUserData(response.data))
      if (response.data.team !== 'none') await dispatch(fetchUserTeam(response.data.team))
      await dispatch(authSuccess())
    } catch (err) {
      console.log(err)
    }
  }
}
