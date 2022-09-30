import { CaretLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SwitchButton from "../buttons/SwitchButton"
export default function GlobalPrefer() {
    const navigate = useNavigate()
    const [langVisib, setLangVisib] = useState(false)
    const [coinVisib, setCoinVisib] = useState(false)
    const [fusoVisib, setFusoVisib] = useState(false)

    return (
        <>
            <header className="account-header py-3 position-sticky top-0 bg-light mb-5">
                <CaretLeft size={25} onClick={() => navigate(-1)} />
            </header>
            <main className="p-3">
                <h1 className="fs-3 fw-bold">Preferências globais</h1>
                <div className="personalInfo-sexo-container bottom-border position-relative py-2 my-2">
                    <h2 className="fs-5 fw-bold">Idioma preferêncial</h2>
                    {langVisib ?
                        <p className="font-smaller text-secondary">Isso atualiza o que você lê no Mybnb e como nos comunicâmos com você.</p> :
                        <p className="font-smaller text-secondary">Português(Brasil)</p>
                    }
                    {langVisib &&
                        <div className="personalInfo-sexo">
                            <div className="personalInfo-changeSexo">
                                <select name="" id="" className="form-select">
                                    <option value=""></option>
                                    <option value="English">English</option>
                                    <option value="Espanhol">Espanhol</option>
                                    <option value="Frances">Frances</option>
                                    <option value="Itáliano">Itáliano</option>
                                    <option value="Português">Português</option>
                                </select>
                            </div>
                            <button className="btn save-btn text-light my-3 py-2">Salvar</button>
                        </div>
                    }
                    <button className="position-absolute top-0 mt-2 end-0 border-0 bg-transparent text-info" onClick={() => setLangVisib(!langVisib)}>{langVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="translate">
                    <SwitchButton text={"Tradução"} text2={"Traduza automatiamente outros idiomas para Português(Brasil)"} />
                </div>
                <div className="personalInfo-sexo-container bottom-border position-relative py-2 my-2">
                    <h2 className="fs-5 fw-bold">Moeda preferêncial</h2>
                    <p className="font-smaller text-secondary">Real brasileiro</p>
                    {coinVisib &&
                        <div className="personalInfo-sexo">
                            <div className="personalInfo-changeSexo">
                                <select name="" id="" className="form-select">
                                    <option value="Real brasileiro" defaultChecked>Real brasileiro</option>
                                    <option value="peso mexicano">peso mexicano</option>
                                    <option value="Dolar americano">Dolar americano</option>
                                    <option value="Dolar canadense">Dolar canadense</option>
                                    <option value="Euro">Euro</option>
                                    <option value="Iene japones">Iene japones</option>
                                    <option value="Yuan chines">Yuan chines</option>
                                </select>
                            </div>
                            <button className="btn save-btn text-light my-3 py-2">Salvar</button>
                        </div>
                    }
                    <button className="position-absolute top-0 mt-2 end-0 border-0 bg-transparent text-info" onClick={() => setCoinVisib(!coinVisib)}>{coinVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="personalInfo-sexo-container bottom-border position-relative py-2 my-2">
                    <h2 className="fs-5 fw-bold">Fuso horário</h2>
                    <p className="font-smaller text-secondary">(GMT-03:00) Brasilia</p>
                    {fusoVisib &&
                        <div className="personalInfo-sexo">
                            <div className="personalInfo-changeSexo">
                                <select name="" id="" className="form-select">
                                    <option value="">Selecionar...</option>
                                    <option
                                        value="(GMT-03:00) Brasilia">
                                        (GMT-03:00) Brasilia
                                    </option>
                                    <option
                                        value="(GMT-04:00) Eastern time(US & canada)">(GMT-05:00) Eastern time(US & canada)
                                    </option>
                                    <option
                                        value="(GMT-04:00) Atlantic Time(Canada)">(GMT-04:00) Atlantic Time(Canada)
                                    </option>
                                    <option
                                        value="(GMT-08:00) Pacific Time(US & canada)">(GMT-08:00) Pacific Time(US & canada)
                                    </option>
                                    <option value="(GMT+08:00) beijing">(GMT+08:00) beijing</option>
                                </select>
                            </div>
                            <button className="btn save-btn text-light my-3 py-2">Salvar</button>
                        </div>
                    }
                    <button className="position-absolute top-0 mt-2 end-0 border-0 bg-transparent text-info" onClick={() => setFusoVisib(!fusoVisib)}>{fusoVisib ? "Cancelar" : "Editar"}</button>
                </div>
            </main>
        </>
    )
}