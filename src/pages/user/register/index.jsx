import { register } from "../../../untils/api.user";
import { useNavigate } from "react-router";
import "./style.scss"

function Register() {
    let navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const infoUser = {
            email: e.target.email.value,
            fullName: e.target.fullName.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value,
        }
        const callRegister = async ()=>{
            try {
                const data = await register(infoUser)
                if(data.message){
                    alert("Đăng kí thành công")
                    navigate("/login")
                }
            } catch (error) {
                if(error.message){
                    alert(error.message)
                }else console.log(error)
            }
        }
        callRegister()
    }
    return (
        <>
            <form onSubmit= {handleSubmit}>
                <div className="box email">
                    <label htmlFor="email">Email</label>
                    <input type="text" name ="email" id="email" />
                </div>
                <div className="box fullName">
                    <label htmlFor="fullName">fullName</label>
                    <input type="text" name ="fullName" id="fullName" />
                </div>
                <div className="box password">
                    <label htmlFor="password">password</label>
                    <input type="text" name ="password" id="password" />
                </div>
                <div className="box confirmPassword">
                    <label htmlFor="confirmPassword">confirmPassword</label>
                    <input type="text" name ="confirmPassword" id="confirmPassword" />
                </div>
                <button>Đăng kí</button>
            </form>
        </>
    )
}
export default Register
// {
//     "email":"truongtest@gmail.com",
//     "fullName":"truongchuche",
//     "password":"Truong@123",
//     "confirmPassword":"Truong@123"
// }