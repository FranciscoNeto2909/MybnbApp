import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { emailAuth } from "../../assets/userSlice"
export default function CodeSender({ userData, setUserData, setCode, handleNextStep }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [inLoading, setInLoading] = useState(false)

    const emailRegex = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3})$")
    const social = [
        {
            name: "Facebook",
            logo: "https://eastmarketchurch.com/wp-content/uploads/2018/12/50-best-facebook-logo-icons-gif-transparent-png-images-19.png"
        },
        {
            name: "Google",
            logo: "https://th.bing.com/th/id/OIP.0OuKM7Opm2u41UmXpJGYxwAAAA?pid=ImgDet&rs=1"
        },
        {
            name: "email",
            logo: "https://th.bing.com/th/id/OIP.9RcUGPQjcZjbS4102B7LkwHaHa?pid=ImgDet&rs=1"
        }
    ]
    const [wrong, setWrong] = useState(false)

    async function handleGenerateAuthCode() {
        let arr = ""
        for (let index = 0; index < 6; index++) {
            const random = Math.floor(Math.random() * 10)
            arr += random
        }
        await setCode(arr)
        return arr
    }

    async function handleValidateEmail(e) {
        e.preventDefault()
        if (userData.email === undefined || !emailRegex.test(userData.email)) {
            setWrong(true)
            setTimeout(() => {
                setWrong(false)
            }, 2000);
        } else if(inLoading == false) {
            const code = await handleGenerateAuthCode()
            setInLoading(true)

            dispatch(emailAuth({
                email:userData.email,
                code:code
            })).then(() => {
                setInLoading(false)
                handleNextStep()
            })
        }
    }

    return (
        <div className="p-4 mb-5">
            <header>
                <h5 className="text-center mt-1">Entrar ou cadastrar-se</h5>
            </header>
            <h3 className="mt-5">Bem-vindo ao Mybnb</h3>
            <form className="d-flex flex-column justify-content-center align-items-center mt-4">
                <div className="email input-group-lg col-11 position-relative">
                    <input id="email" type="Email" className={wrong ? " inpt rounded ps-3 inpt-error lbl-error" : "inpt border border-secondary rounded ps-3"} placeholder=" " autoComplete="none" required onChange={e => setUserData({...userData, email: e.target.value})} value={userData.email} />
                    <label className={wrong ? "lbl lbl-error" : "lbl"} htmlFor="phone">Email</label>
                    {wrong && <p className="font-smaller mt-1 mb-0 text-danger">Digite um email v??lido!</p>}
                </div>
                <div className="numConfirm mt-2">
                    <p className="text-center">Certifique-se de inserir um endere??o de email v??lido para receber o c??digo de acesso.</p>
                </div>
                <button className="btn btn-primary p-2 col-11 my-1 mx-auto" onClick={e => handleValidateEmail(e)}>{inLoading ?"Enviando..." :"Enviar"}</button>
            </form>
            <p className="text-center my-4"> <span className="line"></span> ou <span className="line"></span></p>
            <div className="social container-fluid">
                {social.map((social, i) => <div key={i} className="rede my-3 py-3 text-center border border-dark rounded fw-bold d-flex justify-content-center position-relative mx-2" onClick={() => navigate("/login")}>
                    <img src={social.logo} alt="" className="social-logo position-absolute" />
                    Continuar com {social.name}</div>)}
            </div>
            <div className="help d-flex fw-bold mt-5">
                <a href="" className="text-dark mx-auto">needs help?</a>
            </div>
        </div>
    )
}