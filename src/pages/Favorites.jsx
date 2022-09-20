import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
export default function favorites() {
    const Navigate = useNavigate()
    const user = useSelector(data => data.user)
    return(
        <>
            {
                !user.isLogged && <div className="p-3">
                    <h2 className="mb-5">favorites</h2>
                    <h4>Login to your account to view your favorites</h4>
                    <p>Você pode criar, visualizar ou editar listas de favoritos depois de fazer o login.</p>
                    <button className="btn btn-danger" onClick={()=>{Navigate("/login")}}>Login</button>
                </div> 
            }
        </>
    )
}