import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fortalgamers-proto.firebaseio.com/'
})

export default instance
