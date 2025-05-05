
import { Link,  useNavigate } from "react-router-dom"
import animada from"/public/login-animate.svg"
export default function LoginPage(){
    const navigate = useNavigate()
    return(
        <div className="w-full h-screen flex ">
            <div className="w-[40%] h-full flex items-center justify-center">
                 {/* <Link to="/Cadastro" >Casdastrar 1</Link>  */}
                {/* <button onClick={() => navigate("/cadastro")}>Casdastrar 2</button> */}
                <button onClick={() => window.location.href = "/Cadastro"}>Casdastrar c </button>
            </div>
            <div className="w-[60%] h-full bg-[#6262eb] flex flex-col items-center justify-center rounded-lg" >
                <img  width={600} src={animada} alt="imagem animada"/>
                <p className="text-white font-bold w-[300px] text-[20px] text-center">  A melhor experiancia de longim que você já teve na sua vida</p>
            </div>
        </div>

    )
}