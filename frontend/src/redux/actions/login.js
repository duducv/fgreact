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

export const login = (data) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: 'SPINNER_ON' })
      let response = await axios.post('/login', data)
      console.log(response)
      await localStorage.setItem('token', response.data[0])
      await localStorage.setItem('userId', response.data[1])
      let getUser = await axios.get('/me', {
        headers: {'x-auth-token': localStorage.getItem('token')
        }})
      await dispatch(getUserData(getUser.data))
      await dispatch(getTokenAndId(response.data[0], response.data[1]))
      await dispatch({ type: 'NETWORK_OK' })
      await dispatch(authSuccess())
      await dispatch({ type: 'SPINNER_OFF' })
    } catch (err) {
      console.log(err.message)
      await dispatch({ type: 'SPINNER_OFF' })
      if (err.message !== 'Network Error') dispatch({ type: 'AUTH_ERROR_MESSAGE' })
    }
  }
}

export const logOut = () => {
  return async (dispatch) => {
    try {
      await axios.get('http://localhost:3000/logout')
    } catch (err) {
      console.log(err)
    }
  }
}
