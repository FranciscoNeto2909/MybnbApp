import { useNavigate } from "react-router-dom";
import { CaretLeft } from "phosphor-react"
import { useState } from "react";
export default function LoginAndSecurity() {
    const [loginVisib, setLoginVisib] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            <header className="account-header py-3 position-sticky top-0 bg-light mb-5">
                <CaretLeft size={25} onClick={() => navigate(-1)} />
            </header>
            <main className="p-3">
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
                                    <input id="name" type="text" className="form-control border-secondary rounded ps-3" autoComplete="none" required />
                                </div>
                                <div className="input-group-lg col-11 position-relative">
                                    <label className="form-label" htmlFor="sobrenome">Nova Senha</label>
                                    <input id="sobrenome" type="text" className="form-control border-secondary rounded ps-3 border" autoComplete="none" required />
                                </div>
                                <div className="input-group-lg col-11 position-relative">
                                    <label className="form-label" htmlFor="sobrenome">Confirmar nova senha</label>
                                    <input id="sobrenome" type="text" className="form-control border-secondary rounded ps-3 border" autoComplete="none" required />
                                </div>
                                <button className="btn login-btn text-light my-3 py-2 fw-bold">Atualizar senha</button>
                            </div>
                        }
                        <button className="position-absolute top-0 end-0 border-0 bg-transparent text-info fw-bolder" onClick={e => setLoginVisib(!loginVisib)}>{loginVisib ? "Cancelar" : "Atualizar"}</button>
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
                            <button className="border-0 bg-transparent text-danger position-absolute top-0 end-0">Desativar</button>
                        </div>
                </section>
            </main>
        </>
    )
}