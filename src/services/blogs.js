import axios from 'axios'
const baseUrl = '/api/blogs'
//creating token
let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}
//end of token creation

//get all blogs from backend
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll, setToken }
