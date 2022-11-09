import { useNavigate } from "react-router-dom";
import { CaretLeft } from "phosphor-react"
import { useState } from "react";
import { DeleteUser, logout, updateUser } from "../../assets/userSlice";
import { useDispatch } from "react-redux";
import { hash } from "bcryptjs";

export default function LoginAndSecurity() {
    const [loginVisib, setLoginVisib] = useState(false)
    const [delUserVisib, setDeluserVisib] = useState(false)
    const [newPassVisib, setNewPassVisib] = useState(false)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassowrd] = useState("")
    const [confirmNewPassword, setConfirmNewPassowrd] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [errors, setErrors] = useState({
        passwordError: false,
        newPasswordError: false
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function handleVerifyPassword() {
        dispatch(updateUser({
            name: " ",
            email: "",
            phone: "",
            birthDate: "",
            sex: "",
            address: "",
            oldPassword,
            newPassword
        })).then(e => {
            console.log(e)
            if (e.payload.response?.data.error == true) {
                setErrorMsg(e.payload.response.data.msg)
                setErrors({ ...errors, passwordError: true })
                setTimeout(() => {
                    setErrors({ ...errors, passwordError: false })
                    setErrorMsg("")
                }, 2000);
            }
            else {
                setNewPassVisib(true)
            }
        })
    }

    async function handleUpdatePassoword() {
        if (confirmNewPassword != newPassword) {
            setErrors({ ...errors, newPasswordError: true })
            setTimeout(() => {
                setErrors({ ...errors, newPasswordError: false })
            }, 2000);
        }else{
            const hashedPassword = await hash(newPassword,8)
            dispatch(updateUser({
                name: " ",
                email: "",
                phone: "",
                birthDate: "",
                sex: "",
                address: "",
                oldPassword,
                newPassword:hashedPassword
            })).then(e => console.log(e))
        }
    }

    function handleDeleteUser() {
        const userId = localStorage.getItem("userId")
        dispatch(DeleteUser(userId))
        dispatch(logout())
        navigate("/")
        localStorage.clear()
    }

    return (
        <>
            <header className="account-header py-3 position-sticky top-0 bg-light mb-5">
                <CaretLeft size={25} onClick={() => navigate(-1)} />
            </header>
            <main className="p-3 position-relative">
                <h1 className="fs-3 fw-bold mb-5">Login e segurança</h1>
                <section className="py-2 mb-5">
                    <h2 className="fs-3 fw-bold mb-5">Login</h2>
                    <div className="personalInfo-name-container border-bottom border-secondary position-relative">
                        <h3 className="fs-5 fw-bold">Senha</h3>
                        {loginVisib ?
                            "" : <p className="text-secondary">Atualize aqui</p>
                        }
                        {loginVisib &&
                            <div className="personalInfo-name position-relative">
                                <div className="input-group-lg col-11 my-2">
                                    <label className="form-label" htmlFor="name">Senha atual</label>
                                    <input id="name" type="password" value={oldPassword} className={errors.passwordError ? "form-control inpt-error lbl-error rounded ps-3" : "form-control border-secondary rounded ps-3"} onChange={e => setOldPassword(e.target.value)} autoComplete="none" required />
                                    {errors.passwordError && <p className="lbl-error mt-1 font-smaller">{errorMsg}</p>}
                                    <button className="btn login-btn text-light my-3 py-2 fw-bold" onClick={handleVerifyPassword}>Verificar</button>
                                </div>
                                {newPassVisib &&
                                    <>
                                        <div className="input-group-lg col-11 position-relative">
                                            <label className="form-label" htmlFor="sobrenome">Nova Senha</label>
                                            <input id="newPassword" type="password" className="form-control border-secondary rounded ps-3 border" autoComplete="none" required value={newPassword} onChange={e => setNewPassowrd(e.target.value)} />
                                        </div>
                                        <div className="input-group-lg col-11 position-relative">
                                            <label className="form-label" htmlFor="sobrenome">Confirmar nova senha</label>
                                            <input id="confirmPassword" type="password" className={errors.newPasswordError ? "form-control inpt-error lbl-error rounded ps-3" : "form-control border-secondary rounded ps-3"} autoComplete="none" required value={confirmNewPassword} onChange={e => setConfirmNewPassowrd(e.target.value)} />
                                            {errors.newPasswordError && 
                                            <p className="lbl-error font-smaller mt-1">As senhas não coincidem!</p>}
                                        </div>
                                        <button className="btn login-btn text-light my-3 py-2 fw-bold" onClick={handleUpdatePassoword}>Atualizar senha</button>
                                    </>
                                }
                            </div>
                        }
                        <button className="position-absolute top-0 end-0 border-0 bg-transparent text-info fw-bolder" onClick={e => { setLoginVisib(!loginVisib); setNewPassVisib(false) }}>{loginVisib ? "Cancelar" : "Atualizar"}</button>
                    </div>
                </section>
                <section className="socialAccount-container my-5">
                    <h1 className="fs-3 fw-bold">Contas sociais</h1>
                    <div className="socialAccount">
                        <div className="social-fb my-4 position-relative border-bottom border-secondary">
                            <p className="fs-5 fw-bold">Facebook</p>
                            <span className="text-secondary">Não conectado</span>
                            <button className="border-0 bg-transparent text-info position-absolute end-0 top-0 fw-bolder">Conectar</button>
                        </div>
                        <div className="social-fb my-4 position-relative border-bottom border-secondary py-2">
                            <p className="fs-5 fw-bold">Google</p>
                            <span className="text-secondary">Não conectado</span>
                            <button className="border-0 bg-transparent text-info position-absolute end-0 top-0 fw-bolder">Conectar</button>
                        </div>
                    </div>
                </section>
                <section className="my-5 border-secondary border-bottom">
                    <h2 className="fs-3 fw-bold">Histórico de dispositivos</h2>
                    <p>Não temos acesso aos dispositivos acessados pelo usuario</p>
                </section>
                <section className="border-secondary border-bottom">
                    <h1 className="fs-3 fw-bold">Conta</h1>
                    <div className="del-account position-relative">
                        <p>Desativar sua conta</p>
                        <button className="border-0 bg-transparent text-danger position-absolute top-0 end-0" onClick={() => setDeluserVisib("open")}>Desativar</button>
                    </div>
                </section>
                <dialog className="dialog py-5 position-absolute top-50" open={delUserVisib} >
                    <p>Desejo excluir todos os meus dados</p>
                    <div className="buttons-container d-flex justify-content-evenly">
                        <button className="btn btn-primary" onClick={() => setDeluserVisib("")}>Cancelar</button>
                        <button className="btn btn-danger" onClick={handleDeleteUser}>Excluir</button>
                    </div>
                </dialog>
            </main>
        </>
    )
}