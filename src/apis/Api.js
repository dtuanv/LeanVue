import axios from 'axios'

  const Api = axios.create({
    baseURL : 'http://localhost:8687/'
  })
  export default Api;
