import axios from '../../axios-public'

export const LoginOrLogOut = () => ({
  type: 'AUTH'
})

export const getTokenAndId = (tokenId, userId) => ({
  type: 'GET_TOKEN_AND_ID',
  tokenId,
  userId
})

export const login = (data) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: 'SPINNER_ON' })
      let response = await axios.post('/login', data)
      console.log(response)
      await localStorage.setItem('token', response.data[0])
      await localStorage.setItem('userId', response.data[1])
      await dispatch(getTokenAndId(response.data[0], response.data[1]))
      await dispatch({ type: 'NETWORK_OK' })
      await dispatch(LoginOrLogOut())
      await dispatch({ type: 'SPINNER_OFF' })
    } catch (err) {
      console.log(err.message)
      await dispatch({ type: 'SPINNER_OFF' })
      if (err.message !== 'Network Error') dispatch({ type: 'AUTH_ERROR_MESSAGE' })
    }
  }
}

export const persistToken = (data) => {
  return async (dispatch) => {
    try {
      let response = await axios.get('/me', {
        headers: {'x-auth-token': localStorage.getItem('token')
        }})
      if (response) dispatch(LoginOrLogOut())
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
}
