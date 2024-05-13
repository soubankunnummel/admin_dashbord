import axios from 'axios'
import cookie from 'js-cookie'

const Axios = axios.create({
    // baseURL:'http://localhost:8080/api/',
    baseURL:'https://adimin-dashbord-server.onrender.com/api/',
    headers:{
        "Content-Type":"application/json",
        Authorization: cookie.get("token")
    }

})
export default Axios