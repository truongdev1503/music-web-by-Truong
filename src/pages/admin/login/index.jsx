import { login } from "../../../untils/api.admin"
import { useNavigate } from "react-router";

function Login() {
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const callLogin = async ()=>{
            try {
                const data = await login(email, password)
                if(data && data.accessToken){
                    localStorage.setItem("accessToken", data.accessToken)
                    alert("Login sucess!")
                    navigate("/admin/dashboard");
                }else{
                    alert("Login failed!")
                }
            } catch (error) {
                console.log(`Login error: ${error}`)
            }
        }
        callLogin()

    }
    return(
        <form onSubmit={ (e) => handleSubmit(e)}>
            <label > Tên đăng nhập:
                <input type="text" name = "email"/>
            </label> <br /> 
            <label > Mật khẩu:
                <input type="text" name ="password" />
            </label>
            <br />
            <button>Login</button>
        </form>
    )
}
export default Login