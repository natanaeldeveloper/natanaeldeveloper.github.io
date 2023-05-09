import axios from "axios";

const BASE_URL = 'data.json'
// const BASE_URL = 'https://raw.githubusercontent.com/natanaeldeveloper/portfolio/master/data.json'

const api = axios.create({
  baseURL: BASE_URL
})

export default api