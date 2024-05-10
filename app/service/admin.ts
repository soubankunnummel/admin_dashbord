import Axios from "../config/axios"
interface userInfo {
    username: string;
    password:string
}

export const Login = async (data:userInfo) => {
    console.log(`first`)
    console.log(data)
    try {
        const res = await Axios.post('/login',data)
        return res
    } catch (error) {
        return error
    }
} 