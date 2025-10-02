import axios from "../services/config-axios.service"

export const login = async (email, password) => {
    const data = await axios.post('/admin/login', {email,password})
    return data
}

export const refreshToken = async ()=>{
    const data = await axios.post("/admin/refreshToken")
    return data
}

export const callGenre = async () => {
    const data = await axios.get("/admin/genre?limit=100")
    return data
}

export const createGenre = async (infoGenre) =>{
    const data = await axios.post("/admin/genre/create",infoGenre)
    return data
}