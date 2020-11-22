import axios from 'axios'

// Create an axios instance
export default axios.create({
  baseURL: 'https://safe-savannah-73058.herokuapp.com/',
  timeout: 5000,
  withCredentials: true
})