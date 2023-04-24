import axios from "axios";

const api = axios.create({
  baseURL: "https://raw.githubusercontent.com/natanaeldeveloper/portfolio/master/data.json"
})

export default api