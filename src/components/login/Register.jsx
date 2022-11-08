import React, { useState } from "react"
import { createUser, userLogin } from "../../assets/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { mask } from "remask"
import { hash } from "bcryptjs"

export default function Register({ userData, setUserData }) {
    const data = new Date()
    const year = data.getFullYear()
    
    const [errors, setErrors] = useState({
        nameError: false,
        lastNameError: false,
        phoneError: false,
        passwordError: false,
        confirmPassError: false,
        birthDateError: false
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleMaskPhone(e) {
        setUserData({ ...userData, phone: mask(`${e.target.value}`, ['(99) 99999-9999']) })
    }

    async function handleRegister() {
        if (userData.name === "" || userData.name.length < 2) {
            setErrors({ ...errors, nameError: true })
            setTimeout(() => {
                setErrors({ ...errors, nameError: false })
            }, 2000);
        } else if (userData.lastName === "" || userData.lastName.length < 4) {
            setErrors({ ...errors, lastNameError: true })
            setTimeout(() => {
                setErrors({ ...errors, lastNameError: false })
            }, 2000);
        } else if (userData.password === "" || userData.password.length < 6) {
            setErrors({ ...errors, passwordError: true })
            setTimeout(() => {
                setErrors({ ...errors, passwordError: false })
            }, 2000);
        } else if (userData.confirmPass === "") {
            setErrors({ ...errors, confirmPassError: true })
            setTimeout(() => {
                setErrors({ ...errors, confirmPassError: false })
            }, 2000);
        } else if (userData.password !== userData.confirmPass) {
            setErrors({ ...errors, confirmPassError: true })
            setTimeout(() => {
                setErrors({ ...errors, confirmPasswordError: false })
            }, 2000);
        } else if (userData.birthDate === "" || Number(year) - Number(userData.birthDate.slice(0, 4)) < 18) {
            setErrors({ ...errors, birthDateError: true })
            setTimeout(() => {
                setErrors({ ...errors, birthDateError: false })
            }, 2000);
        } else if (userData.phone === "" || userData.phone.length < 15 || userData.phone[5] != 9) {
            setErrors({ ...errors, phoneError: true })
            setTimeout(() => {
                setErrors({ ...errors, phoneError: false })
            }, 2000);
        }
        else {
            const hashedPassword = await hash(userData.password,8)
            
            dispatch(createUser({
                name:`${userData.name} ${userData.lastName}`,
                phone: userData.phone,
                email: userData.email,
                password:hashedPassword,
                birthDate: userData.birthDate
            })).then(() => navigate("/login"))
        }
    }


    return (
        <>
            <header className="border border-bottom mb-3 py-3">
                <h1 className="fs-5 text-center">Concluir cadastro</h1>
            </header>
            <main className="container-fluid mb-5 p-4 d-flex flex-column">
                <section className="name-container container mb-3">
                    <div className="input-group-lg position-relative">
                        <input id="name" type="text" placeholder=" " className={errors.nameError ? "inpt inpt-error rounded-top ps-3 text-capitalize" : "inpt border border-secondary rounded-top ps-3 text-capitalize"} autoComplete="none" required autoCapitalize="on" value={userData.name} onChange={e => setUserData({ ...userData, name: e.target.value })} />
                        <label className={errors.nameError ? "lbl lbl-error" : "lbl"} htmlFor="name">Name</label>
                    </div>
                    <div className="input-group-lg  position-relative">
                        <input id="sobrenome" type="text" placeholder=" " className={errors.lastNameError ? "inpt inpt-error rounded-bottom ps-3 text-capitalize" : "inpt border border-secondary rounded-bottom ps-3 text-capitalize"} autoComplete="none" required autoCapitalize="on" onChange={e => setUserData({ ...userData, lastName: e.target.value })} />
                        <label className={errors.lastNameError ? "lbl lbl-error" : "lbl"} htmlFor="sobrenome">Sobrenome</label>
                        {errors.nameError && <p className="lbl-error">Nome muito curto!</p>}
                        {errors.lastNameError && <p className="lbl-error">Sobrenome muito curto!</p>}
                    </div>
                    <p className="name-desc m-1">O nome que você colocar aqui ficara visivel para os outros usuarios</p>
                </section>
                <section className="password-container container mb-4">
                    <div className="password input-group-lg">
                        <input type="password" id="pass" placeholder=" "
                            className={errors.passwordError ? "inpt rounded ps-3 inpt-error" : "inpt border border-secondary rounded ps-3"}
                            required value={userData.password}
                            onChange={e => setUserData({ ...userData, password: e.target.value })} maxLength="10" />
                        <label htmlFor="pass" className={errors.passwordError ? "lbl lbl-error" : "lbl"}>Senha</label>
                    </div>
                    {errors.passwordError && userData.password === "" && <p className="lbl-error">Este campo não pode ser vazio!</p>}
                    {errors.passwordError && userData.password.length > 1 && userData.password.length < 6 && <p className="lbl-error">Este campo deve conter no minimo 6 digitos</p>}
                    <span className="d-inline-block my-1">Confirme sua senha</span>
                    <div className="password input-group">
                        <input type="password" id="pass-confirm" placeholder=" "
                            className={errors.confirmPassError ? "inpt rounded ps-3 inpt-error" : "inpt border border-secondary rounded ps-3"} required onChange={e => setUserData({ ...userData, confirmPass: e.target.value })} />
                        <label htmlFor="pass" className={errors.confirmPassError ? "lbl lbl-error" : "lbl"}>Confirmação</label>
                    </div>
                    {errors.confirmPassError && userData.confirmPass === "" && <p className="lbl-error">Este campo não pode ser vazio!</p>}
                    {errors.confirmPassError && userData.confirmPass.length > 0 && userData.confirmPass.length < 6 && <p className="lbl-error">Este campo deve conter no minimo 6 digitos</p>}
                    {errors.confirmPassError && userData.password !== userData.confirmPass && userData.confirmPass.length >= 6 && <p className="lbl-error">As senhas não coincidem</p>}
                </section>
                <section className="birthDate container">
                    <details className="age-details">
                        <summary className="fs-5">Data de nascimento</summary>
                        <span>para se cadastrar deve ter mais de 18 anos.</span></details>
                    <input type="date" placeholder=" " onChange={e => setUserData({ ...userData, birthDate: e.target.value })} className={errors.birthDateError ? "inpt-error form-control" : "form-control border-secondary"} />
                    {errors.birthDateError && userData.birthDate === "" &&
                        <p className="lbl-error">este campo não pode ser vazio!</p>}
                    {errors.birthDateError && Number(year) - Number(userData.birthDate.slice(0, 4)) < 18 && <p className="lbl-error">Você deve ter mais de 18 anos</p>}
                </section>
                <section className="phone-container container my-4">
                    <div className="phone input-group-lg position-relative">
                        <input className={errors.phoneError ? "inpt inpt-error rounded ps-3 pt-2" : "inpt border border-secondary rounded ps-3 pt-2"} placeholder=" " type={'tel'} id="tel" autoComplete="none" required onChange={e => handleMaskPhone(e)} value={userData.phone} />
                        <label className={errors.phoneError ? "lbl lbl-error" : "lbl"} htmlFor="tel">Telefone</label>
                        {errors.phoneError && userData.phone === "" &&
                            <p className="lbl-error">Este campo não pode ser vazio!</p>}
                        {errors.phoneError && userData.phone !== "" &&
                            <p className="lbl-error">Digite um numero válido!</p>}
                    </div>
                </section>
                <section className="service-terms container">
                    <p className="email-desc my-2">Vamos enviar confirmações de viagem e recibos para voce por email.</p>
                    <p className="terms-desc mb-4">Ao selecionar <strong>Concordar e continuar</strong>, eu concordo com os <a href="">termos de serviços</a>, <a href="">Politica de Não Discriminalização</a> e <a href="">Politica de Privacidade</a></p>
                </section>
                <button className="btn btn-primary" onClick={() => handleRegister()}>Concordar e continuar</button>
                <div className="form-check container d-flex justify-content- mt-3">
                    <input className="form-check-input border-secondary p-2 me-2" type="checkbox" id="espaco" />
                    <label className="form-check-label" htmlFor="espaco">Não quero receber mensagens de marketing do mybnb</label>
                </div>
                <small className="notifi-desc mt-3">Esta aplicação foi desenvolvida no intuito de praticar programação web. Não tem nenhum fim comercial ou financeiro.</small>
            </main>
        </>
    )
}