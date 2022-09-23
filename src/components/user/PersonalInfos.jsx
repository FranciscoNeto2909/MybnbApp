import { CaretLeft } from "phosphor-react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { showNav } from "../../assets/appSlice"
export default function name() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [nameVisib, setNameVisb] = useState(false)
    const [sexoVisib, setSexoVisb] = useState(false)
    const [birthVisib, setBirthVisb] = useState(false)
    const [EmailVisib, setEmailVisb] = useState(false)
    const [phoneVisib, setPhoneVisb] = useState(false)
    const [addrVisib, setAddrVisb] = useState(false)


    function handleBackButton() {
        navigate(-1)
        dispatch(showNav())
    }
    return (
        <div>
            <header className="personalinfo-header py-3 position-sticky top-0 bg-light">
                <CaretLeft size={25} onClick={handleBackButton} />
            </header>
            <main className="p-3">
                <h1 className="fs-3 fw-bold mb-4">Informações pessoais</h1>
                <div className="personalInfo-name-container border-bottom border-secondary position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Nome</h2>
                    {nameVisib ?
                        <p className="text-secondary">Este é o nome que aparecerá em seus documentos de viagem.</p> :
                        <p className="text-secondary">Francisco</p>
                    }
                    {nameVisib &&
                        <div className="personalInfo-name position-relative">
                            <div className="phone input-group-lg col-11 my-2">
                                <input id="name" type="text" className="inpt border border-secondary rounded ps-3" autoComplete="none" required />
                                <label className="lbl" htmlFor="name">Name</label>
                            </div>
                            <div className="phone input-group-lg col-11 position-relative">
                                <input id="sobrenome" type="text" className="inpt border border-secondary rounded ps-3 border" autoComplete="none" required />
                                <label className="lbl" htmlFor="sobrenome">Sobrenome</label>
                            </div>
                            <button className="btn btn-dark my-3 py-2">Salvar</button>
                        </div>
                    }
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={e => setNameVisb(!nameVisib)}>{nameVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="personalInfo-sexo-container border-bottom border-secondary position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Sexo</h2>
                    <p className="text-secondary">Não especificado</p>
                    {sexoVisib &&
                        <div className="personalInfo-sexo">
                            <div className="personalInfo-changeSexo">
                                <select name="" id="" className="form-select">
                                    <option value=""></option>
                                    <option value="homen">Masculino</option>
                                    <option value="mulher">Feminino</option>
                                    <option value="outro">Outros</option>
                                </select>
                            </div>
                            <button className="btn btn-dark my-3 py-2">Salvar</button>
                        </div>
                    }
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={() => setSexoVisb(!sexoVisib)}>{sexoVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="personalInfo-nascimento-container border-bottom border-secondary position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Data de nascimento</h2>
                    {!birthVisib && <p className="text-secondary">**/**/****</p>}
                    {birthVisib &&
                        <div className="personalInfo-nascimento">
                            <div className="personalInfo-changeSexo">
                                <input type="date" className="form-control"/>
                            </div>
                            <button className="btn btn-dark my-3 py-2">Salvar</button>
                        </div>
                    }
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={() => setBirthVisb(!birthVisib)}>{birthVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="personalInfo-email-container border-bottom border-secondary position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Endereço de email</h2>
                    {!EmailVisib && <p className="text-secondary">Use um endereço de email a qual tenha acesso</p>}
                    {EmailVisib && <div className="personalInfo-nascimento">
                        <div className="phone input-group-lg col-11 my-2">
                                <input id="name" type="email" className="inpt border border-secondary rounded ps-3" autoComplete="none" required />
                                <label className="lbl" htmlFor="name">Endereço de email</label>
                            </div>
                        <button className="btn btn-dark my-3 py-2">Salvar</button>
                    </div>}
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={() => setEmailVisb(!EmailVisib)}>{EmailVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="personalInfo-telefone-container border-bottom border-secondary position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Telefone</h2>
                    {!phoneVisib && <p className="text-secondary">Adicione um numero de telefone para que os hospedes e o mybnb possa entrar em contato.</p>}
                    {phoneVisib && <div className="personalInfo-telefone">
                        <p>Insira um novo numero de telefone</p>
                        <div className="personalInfo-changeTelefone">
                            <div className="countrysDDD input-group-lg col-11 position-relative">
                                <select id="countrys" className="inpt border border-secondary rounded-top">
                                    <option value=""></option>
                                    <option value="+55">Brasil(+55)</option>
                                    <option value="+1">Estados Unidos(+1)</option>
                                    <option value="+1">Canada(+1)</option>
                                    <option value="+49">Alemanha(+49)</option>
                                    <option value="+44">Reino unido(+44)</option>
                                    <option value="+7">Russia(+7)</option>
                                    <option value="+213">Argentina(+213)</option>
                                </select>
                                <label htmlFor="countrys" className="lbl">País/Região</label>
                            </div>
                            <div className="phone input-group-lg col-11 position-relative">
                                <input id="phone" type="tel" className="inpt border border-secondary rounded-bottom ps-3 border-top-0" autoComplete="none" required onChange={e => setPNum(e.target.value)} />
                                <label className="lbl" htmlFor="phone">Número de telefone</label>
                            </div>
                            <p>Não enviaremos um sms para verificar seu número.</p>
                        </div>
                        <button className="btn btn-dark my-3 py-2">Verificar</button>
                    </div>}
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={() => setPhoneVisb(!phoneVisib)}>{phoneVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="personalInfo-endereco-container
                position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Endereço</h2>
                    {!addrVisib && <p className="text-secondary">Não fornecido</p>}
                   {addrVisib && <div className="personalInfo-endereco">
                    <div className="phone input-group-lg col-11 position-relative">
                                <input id="address" type="text" className="inpt border border-secondary rounded ps-3" autoComplete="none" required onChange={e => setPNum(e.target.value)} />
                                <label className="lbl" htmlFor="address">Endereço</label>
                            </div>
                        <button className="btn btn-dark my-3 py-2">Salvar</button>
                    </div>}
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={() => setAddrVisb(!addrVisib)}>{addrVisib ? "Cancelar" : "Editar"}</button>
                </div>
            </main >
        </div >
    )
}