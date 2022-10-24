import React from "react"
export default function Registration({ email, setEmail, setCode, handleNextStep }) {
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
    async function handleGenerateAuthCode() {
        let arr = ""
        for (let index = 0; index < 6; index++) {
            const random = Math.floor(Math.random() * 10)
            arr += random
        }
        await setCode(arr)
        return arr
    }
    async function handleValidatePhone(e) {
        e.preventDefault()
        if (email === undefined) {
            alert("preencha os campos")
        }
        else if (!emailRegex.test(email)) {
            alert("digite um endereço de email válido!")
            setEmail("")
        } else {
            handleGenerateAuthCode()
            handleNextStep()
        }
    }
    return (
        <div className="p-4 mb-5">
            <header>
                <h5 className="text-center mt-1">Entrar ou cadastrar-se</h5>
            </header>
            <h3 className="mt-5">Bem-vindo ao Mybnb</h3>
            <form className="d-flex flex-column justify-content-center align-items-center mt-4">
                <div className="phone input-group-lg col-11 position-relative">
                    <input id="phone" type="Email" className="inpt border border-secondary rounded ps-3 border" autoComplete="none" required onChange={e => setEmail(e.target.value)} value={email}/>
                    <label className="lbl" htmlFor="phone">Email</label>
                </div>
                <div className="numConfirm mt-2">
                    <p className="text-center">Enviaremos um codigo de confirmação para seu endereço de email.</p>
                </div>
                <button className="btn btn-primary p-2 col-11 my-1 mx-auto" onClick={e => handleValidatePhone(e)}>Continue</button>
            </form>
            <p className="text-center my-4"> <span className="line"></span> ou <span className="line"></span></p>
            <div className="social container-fluid">
                {social.map((social, i) => <div key={i} className="rede my-3 py-3 text-center border border-dark rounded fw-bold d-flex justify-content-center position-relative mx-2">
                    <img src={social.logo} alt="" className="social-logo position-absolute" />
                    Continuar com {social.name}</div>)}
            </div>
            <div className="help d-flex fw-bold mt-5">
                <a href="" className="text-dark mx-auto">needs help?</a>
            </div>
        </div>
    )
}