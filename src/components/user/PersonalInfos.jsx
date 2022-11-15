import { CaretLeft } from "phosphor-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { showNav } from "../../assets/appSlice"
import { mask } from "remask"
import { getUser, updateUser } from "../../assets/userSlice"

export default function name() {
    const data = new Date()
    const year = data.getFullYear()

    const navigate = useNavigate()
    const user = useSelector(data => data.user.user)
    const emailRegex = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3})$")

    const dispatch = useDispatch()
    const [nameVisib, setNameVisb] = useState(false)
    const [sexoVisib, setSexoVisb] = useState(false)
    const [birthVisib, setBirthVisb] = useState(false)
    const [EmailVisib, setEmailVisb] = useState(false)
    const [phoneVisib, setPhoneVisb] = useState(false)
    const [addrVisib, setAddrVisb] = useState(false)

    const [errors, setErrors] = useState({
        passwordError: false,
        confirmPassError: false,
        birthDateError: false,
        phoneError: false,
        emailError: false
    })
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        image:"",
        lastName: "",
        sex: "",
        phone: "",
        password: "",
        confirmPass: "",
        birthDate: "",
        address: ""
    })

    async function handleValidateEmail() {
        if (!emailRegex.test(userData.email)) {
            setErrors({ ...errors, emailError: true })
            setTimeout(() => {
                setErrors({ ...errors, emailError: false })
            }, 2000);
        } else {
            handleUpdateUser()
        }
    }

    function handleMaskPhone(e) {
        setUserData({ ...userData, phone: mask(`${e.target.value}`, ['(99) 99999-9999']) })
    }

    function handleValidadeBirthDate() {
        if (userData.birthDate === "" || Number(year) - Number(userData.birthDate.slice(0, 4)) < 18) {
            setErrors({ ...errors, birthDateError: true })
            setTimeout(() => {
                setErrors({ ...errors, birthDateError: false })
            }, 2000);
        } else {
            handleUpdateUser()
        }
    }

    function handleValidatePhone() {
        if (userData.phone === "" || userData.phone.length < 15 || userData.phone[5] != 9) {
            setErrors({ ...errors, phoneError: true })
            setTimeout(() => {
                setErrors({ ...errors, phoneError: false })
            }, 2000);
        } else {
            handleUpdateUser()
        }
    }

    function handleBackButton() {
        navigate(-1)
        dispatch(showNav())
    }

    function handleUpdateUser() {
        setNameVisb(false)
        setAddrVisb(false)
        setBirthVisb(false)
        setEmailVisb(false)
        setPhoneVisb(false)
        setSexoVisb(false)

        dispatch(updateUser({
            name: `${userData.name} ${userData.lastName}`,
            image:"",
            email: userData.email,
            phone: userData.phone,
            birthDate: userData.birthDate,
            sex: userData.sex,
            address: userData.address,
            oldPassword:"",
            newPassword:""
        }))
    }

    function handleGetNewUserdata() {
        const userId = localStorage.getItem("userId")
        dispatch(getUser(userId))
    }

    return (
        <div>
            <header className="personalinfo-header py-3 position-sticky top-0 bg-light">
                <CaretLeft size={25} onClick={handleBackButton} />
            </header>
            <main className="p-3">
                <h1 className="fs-3 fw-bold mb-5">Informações pessoais</h1>
                <div className="personalInfo-name-container bottom-border position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Nome</h2>
                    {nameVisib ?
                        <p className="text-secondary">Este é o nome que aparecerá em seus documentos de viagem.</p> :
                        <p className="text-secondary">{user.name}</p>
                    }
                    {nameVisib &&
                        <div className="personalInfo-name position-relative">
                            <div className="phone input-group-lg col-11 my-2">
                                <input id="name" type="text" className="inpt border border-secondary rounded ps-3" autoComplete="none" required value={userData.name} onChange={e => setUserData({ ...userData, name: e.target.value })} />
                                <label className="lbl" htmlFor="name">Name</label>
                            </div>
                            <div className="phone input-group-lg col-11 position-relative">
                                <input id="sobrenome" type="text" className="inpt border border-secondary rounded ps-3 border" autoComplete="none" required value={userData.lastName} onChange={e => setUserData({ ...userData, lastName: e.target.value })} />
                                <label className="lbl" htmlFor="sobrenome">Sobrenome</label>
                            </div>
                            <button className="btn btn-dark my-3 py-2" onClick={handleUpdateUser}>Salvar</button>
                        </div>
                    }
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={e => setNameVisb(!nameVisib)}>{nameVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="personalInfo-sexo-container bottom-border position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Sexo</h2>
                    <p className="text-secondary">{user.sex ? user.sex : "Não especificado"}</p>
                    {sexoVisib &&
                        <div className="personalInfo-sexo">
                            <div className="personalInfo-changeSexo">
                                <select name="" id="" className="form-select" onChange={e => setUserData({ ...userData, sex: e.target.value })}>
                                    <option value=""></option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                            <button className="btn btn-dark my-3 py-2" onClick={handleUpdateUser}>Salvar</button>
                        </div>
                    }
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={() => setSexoVisb(!sexoVisib)}>{sexoVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="personalInfo-nascimento-container bottom-border position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Data de nascimento</h2>
                    {!birthVisib && <p className="text-secondary">{user.birthDate ? user.birthDate : "**/**/****"}</p>}
                    {birthVisib &&
                        <div className="personalInfo-nascimento">
                            <div className="personalInfo-changeSexo">
                                <input type="date" className={errors.birthDateError ? "form-control inpt-error lbl-error" : "form-control"} value={userData.birthDate} onChange={e => setUserData({ ...userData, birthDate: e.target.value })} />
                            </div>
                            {errors.birthDateError && <p className="fornt-smaller lbl-error">Você deve ter mais de 18 anos!</p>}
                            <button className="btn btn-dark my-3 py-2" onClick={handleValidadeBirthDate}>Salvar</button>
                        </div>
                    }
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={() => setBirthVisb(!birthVisib)}>{birthVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="personalInfo-email-container bottom-border position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Endereço de email</h2>
                    {!EmailVisib ?
                        <p className="text-secondary">{user.email}</p> :
                        <p className="text-secondary">Use um endereço de email a qual tenha acesso</p>
                    }
                    {EmailVisib && <div className="personalInfo-nascimento">
                        <div className="phone input-group-lg col-11 my-2">
                            <input id="name" type="email" required
                                className={errors.emailError ?
                                    "inpt inpt-error rounded ps-3 lbl-error" :
                                    "inpt border border-secondary rounded ps-3"
                                } autoComplete="none" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })}
                            />
                            <label className={errors.emailError ? "lbl lbl-error" : "lbl"} htmlFor="name">Endereço de email</label>
                            {errors.emailError &&
                                <p className="font-smaller lbl-error mt-1">Digite um endereço de email válido!</p>
                            }
                        </div>
                        <button className="btn btn-dark my-3 py-2" onClick={handleValidateEmail}>Salvar</button>
                    </div>}
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={() => setEmailVisb(!EmailVisib)}>{EmailVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="personalInfo-telefone-container bottom-border position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Telefone</h2>
                    {!phoneVisib ? <p className="text-secondary">{user.phone}</p> : <p className="text-secondary">Adicione um numero de telefone para que os hospedes e o mybnb possa entrar em contato.</p>}
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
                                <input id="phone" type="tel" required
                                    className={errors.phoneError ?
                                        "inpt inpt-error rounded-bottom ps-3 lbl-error" :
                                        "inpt border border-secondary rounded-bottom ps-3 border-top-0"
                                    } autoComplete="none" value={userData.phone} onChange={e => handleMaskPhone(e)} />
                                <label className={errors.phoneError ? "lbl lbl-error" : "lbl"} htmlFor="phone">Número de telefone</label>
                                {errors.phoneError &&
                                    <p className="font-smaller lbl-error mt-1">
                                        Digite um telefone válido
                                    </p>
                                }
                            </div>
                            <p className="mt-1">Nenhum sms será enviado para seu número.</p>
                        </div>
                        <button className="btn btn-dark my-3 py-2" onClick={handleValidatePhone}>Salvar</button>
                    </div>}
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={() => setPhoneVisb(!phoneVisib)}>{phoneVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="personalInfo-endereco-container
                position-relative py-2 my-2">
                    <h2 className="fs-4 fw-bold">Endereço</h2>
                    {!addrVisib && <p className="text-secondary">{user.address ? user.address : "Não fornecido"}</p>}
                    {addrVisib && <div className="personalInfo-endereco">
                        <div className="phone input-group-lg col-11 position-relative">
                            <input id="address" type="text" className="inpt border border-secondary rounded ps-3" autoComplete="none" required value={userData.address} onChange={e => setUserData({ ...userData, address: e.target.value })} />
                            <label className="lbl" htmlFor="address">Endereço</label>
                        </div>
                        <button className="btn btn-dark my-3 py-2" onClick={handleUpdateUser}>Salvar</button>
                    </div>}
                    <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={() => setAddrVisb(!addrVisib)}>{addrVisib ? "Cancelar" : "Editar"}</button>
                </div>
                <div className="updateUserData">
                    <button className="btn btn-dark mt-4" onClick={handleGetNewUserdata}>Atualizar dados</button>
                </div>
            </main >
        </div >
    )
}