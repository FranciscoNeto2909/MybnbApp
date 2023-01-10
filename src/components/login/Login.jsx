import React, { useState } from "react";
import { CaretLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../../assets/userSlice"

export default function Login() {
    const isLogged = useSelector(data => data.user.isLogged)
    const [inLoading, setInLoading] = useState(false)
    const emailRegex = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3})$")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const passwordRegex = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$")

    const [errors, setErrors] = useState({
        emailError: false,
        passwordError: false,
        loginError: false
    })
    const [errorMsg, setErrorMsg] = useState("")

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    function handleLogin(e) {
        e.preventDefault()

        if (user.email === "" || !emailRegex.test(user.email)) {
            setErrors({ ...errors, emailError: true })
            setTimeout(() => {
                setErrors({ ...errors, emailError: false })
            }, 2500);
        } else if (user.password === "" || !passwordRegex.test(user.password)) {
            setErrors({ ...errors, passwordError: true })
            setTimeout(() => {
                setErrors({ ...errors, passwordError: false })
            }, 2500);
        }
        else if (inLoading == false) {
            setInLoading(true)
            dispatch(login(user))
                .then(e => {
                    if (e.payload.error == false) {
                        const userId = e.payload.userId
                        localStorage.setItem("userId", userId.toString())
                        dispatch(getUser(userId.toString()))
                        setInLoading(false)
                        localStorage.setItem("routeId", 1)
                        navigate("/")
                    } else {
                        setErrors({ ...errors, loginError: true })
                        setErrorMsg(e.payload.response.data.msg)
                        setInLoading(false)
                        setTimeout(() => {
                            setErrors({ ...errors, loginError: false })
                            setErrorMsg("")
                        }, 2500);
                    }
                });
        }
    }

    return (
        <div className="container-fluid p-0">
            <header className="account-header py-3 position-sticky top-0 bg-light mb-5">
                <CaretLeft size={25} onClick={() => navigate(-1)} />
            </header>
            <main className="container-fluid p-0 m-0 d-flex flex-column align-items-center justify-content-center">
                <h2>Login</h2>
                <p className="ps-3">Faça login com sua conta para acessar seus dados no myBnb</p>
                <form className="login form container d-flex flex-column align-items-center">
                    <div className="login-email input-group-lg col-11 position-relative my-3">
                        <input type="email"
                            className={errors.emailError ?
                                "inpt rounded ps-3 inpt-error lbl-error" :
                                "inpt border border-secondary rounded ps-3"
                            }
                            placeholder=" " required value={user.email} onChange={e => setUser({ ...user, email: e.target.value })}
                        />
                        <label htmlFor="" className={errors.emailError ? "lbl-error lbl" : "lbl"}>Email</label>

                        {errors.emailError && user.email == "" &&
                            <p className="lbl-error mt-1">Este campo não pode ser vazio!</p>
                        }
                        {errors.emailError && user.email != "" &&
                            <p className="lbl-error mt-1">Digite um endereço de email válido!</p>
                        }

                    </div>
                    <div className="login-password input-group-lg col-11 position-relative">
                        <input type="password"
                            className={errors.passwordError ?
                                "inpt rounded ps-3 inpt-error" :
                                "inpt border border-secondary rounded ps-3"} placeholder=" " required value={user.password}
                            onChange={e => setUser({ ...user, password: e.target.value })}
                        />
                        <label htmlFor="" className={errors.passwordError ? "lbl-error lbl" : "lbl"}>Senha</label>

                        {errors.passwordError && user.password == "" &&
                            <p className="lbl-error mt-1">Este campo não pode ser vazio!</p>
                        }
                        {errors.passwordError && user.password != "" && user.password.length < 6 &&
                            <p className="lbl-error mt-1">Sua senha deve ter no minimo 6 digitos!</p>
                        }
                        {errors.passwordError && user.password != "" && user.password.length >= 6 &&
                            <p className="lbl-error mt-1">Sua senha deve ter apenas numeros, letras maiúsculas e minúsculas!</p>
                        }
                        {errors.loginError && <p className="lbl-error mt-1">{errorMsg}</p>

                        }
                        <p className="font-smaller mt-2">Sua senha deve ter numeros, letras maiusculas e minusculas e nenhum caractere especial</p>
                    </div>
                    <button className="btn btn-primary my-3 col-11" onClick={e => handleLogin(e)}>{inLoading ? "Aguarde ..." : "Login"}</button>
                </form>
                <p className="ps-4">Insira um endereço de email válido, que ja tenha sido usado no myBnb antes.</p>
                <span className="ps-4 mt-5"> Está aplicação foi desenvolvida no intuito de praticar programação e não tem nenhum fim comercial ou finançeiro</span>
            </main>
        </div>
    )
}