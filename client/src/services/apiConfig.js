import axios from 'axios'



const api = axios.create({baseURL : 
    process.env.NODE_ENV === "production" ? 'https://floating-atoll-11194.herokuapp.com/api' : 
    'http://localhost:3000/api/' })

export default api