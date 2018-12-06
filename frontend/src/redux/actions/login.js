import axios from 'axios'

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
      await axios.get('http://localhost:3000/logout')
    } catch (err) {
      console.log(err)
    }
  }
}
