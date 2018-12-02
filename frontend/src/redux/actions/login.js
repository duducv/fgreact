import axios from '../../axios-public'

export const LoginOrLogOut = () => ({
  type: 'AUTH'
})

/* export const login = (data) => {
  return dispatch => {
    axios.post('/login', data)
      .then((response) => {
        console.log(response)
        dispatch(LoginOrLogOut())
        dispatch({ type: 'SPINNER_ON' })
      }
      )
      .catch(err => {
        console.log(err)
        dispatch({type: 'SPINNER_OFF'})
      })
  }
} */

export const login = (data) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: 'SPINNER_ON' })
      let response = await axios.post('/login', data)
      console.log(response)
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
