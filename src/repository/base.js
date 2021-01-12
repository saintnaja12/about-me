import axios from 'axios'

// BASE URL
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
const instance = axios.create()

export default instance
