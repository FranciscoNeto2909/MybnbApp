import React from "react"
import { userLogin } from "../../assets/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { mask } from "remask" 
import { useState } from "react"
export default function CompleteRegistration() {
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleLogin() {
        dispatch(userLogin())
        navigate("/")
    }
    function handleMaskPhone(e) {
        setPhone(mask(`${e.target.value}`,['(99)99999-9999']))
    }
    return (
        <>
            <header className="border border-bottom mb-3 py-3">
                <h1 className="fs-5 text-center">Concluir cadastro</h1>
            </header>
            <main className="container-fluid mb-5 p-4 d-flex flex-column">
                <section className="name-container container mb-3">
                    <div className="phone input-group-lg position-relative">
                        <input id="name" type="text" className="inpt border border-secondary rounded-top ps-3" autoComplete="none" required autoCapitalize="on" />
                        <label className="lbl" htmlFor="name">Name</label>
                    </div>
                    <div className="phone input-group-lg  position-relative">
                        <input id="sobrenome" type="text" className="inpt border border-secondary rounded-bottom ps-3 border-top-0" autoComplete="none" required autoCapitalize="on"/>
                        <label className="lbl" htmlFor="sobrenome">Sobrenome</label>
                    </div>
                    <p className="name-desc m-1">O nome que você colocar aqui ficara visivel para os outros usuarios</p>
                </section>
                <section className="password-container container mb-4">
                    <div className="password input-group-lg">
                        <input type="password" id="pass" className="inpt border border-secondary rounded ps-3 border" required/>
                        <label htmlFor="pass" className="lbl">Senha</label>
                    </div>
                    <span className="d-inline-block my-1">Confirme sua senha</span>
                    <div className="password input-group">
                        <input type="password" id="pass-confirm" className="inpt border border-secondary rounded ps-3 border" required />
                        <label htmlFor="pass" className="lbl">Confirmação</label>
                    </div>
                </section>
                <section className="birthday container">
                    <details className="age-details">
                        <summary className="fs-5">Data de nascimento</summary>
                        <span>para se cadastrar deve ter mais de 18 anos.</span></details>
                    <input type="date" />
                </section>
                <section className="phone-container container my-4">
                    <div className="phone input-group-lg position-relative">
                        <input className="inpt border border-secondary rounded ps-3 pt-2" type={'tel'} id="tel" autoComplete="none" required onChange={e => handleMaskPhone(e)} value={phone} />
                        <label className="lbl" htmlFor="tel">Telefone</label>
                    </div>
                </section>
                <section className="service-terms container">
                <p className="email-desc my-2">Vamos enviar confirmações de viagem e recibos para voce por email.</p>
                    <p className="terms-desc mb-4">Ao selecionar <strong>Concordar e continuar</strong>, eu concordo com os <a href="">termos de serviços</a>, <a href="">Politica de Não Discriminalização</a> e <a href="">Politica de Privacidade</a></p>
                </section>
                <button className="btn btn-primary" onClick={() => handleLogin()}>Concordar e continuar</button>
                <div className="form-check container d-flex justify-content- mt-3">
                    <input className="form-check-input border-secondary p-2 me-2" type="checkbox" id="espaco" />
                    <label className="form-check-label" htmlFor="espaco">Não quero receber mensagens de marketing do mybnb</label>
                </div>
                <small className="notifi-desc mt-3">Esta aplicação foi desenvolvida no intuito de praticar programação web. Não tem nenhum fim comercial ou financeiro.</small>
            </main>
        </>
    )
}