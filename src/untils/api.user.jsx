import axios from "../services/config-axios-user.service";

export const refreshToken = async ()=>{
    const data = await axios.post("/user/auth/refreshToken")
    return data
}
export const register = async (infoUser)=>{
    const data = await axios.post("/user/auth/register",infoUser)
    return data
}

export const loginUser = async (email,password) =>{
    const data = await axios.post("/user/auth/login",{email,password})
    return data
}