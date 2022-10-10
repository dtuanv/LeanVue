import axios from 'axios'

  const Api = axios.create({
    baseURL : 'http://localhost:8686/'
  })
  export default Api;
