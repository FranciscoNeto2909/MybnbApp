import { CaretLeft } from "phosphor-react"
import { useNavigate } from "react-router-dom"
export default function name() {
    const navigate = useNavigate()
    return (
        <div>
            <header className="py-3 position-sticky top-0 bg-light border-bottom border-secondary">
                <CaretLeft size={30} onClick={()=>navigate(-1)}/>
            </header>
            <main>
                <h1>Informações pessoais</h1>
                <div className="personalInfo-name-container border-bottom border-secondary">
                    <label>Nome</label>
                    francisco
                    <p>Este é o nome que aparecerá em seus documentos de viagem.</p>
                    <div className="personalInfo-name">
                        <div className="personalInfo-changeName">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" />
                        </div>
                        <div className="personalInfo-changeSobrenome">
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <input type="text" id="sobrenome" />
                        </div>
                        <button>Salvar</button>
                    </div>
                    <button>editar</button>
                </div>
                <div className="personalInfo-sexo-container border-bottom border-secondary">
                    <h2>Sexo</h2>
                    <div className="personalInfo-sexo">
                        <div className="personalInfo-changeSexo">
                            <select name="" id="">
                                <option value=""></option>
                                <option value="homen">Masculino</option>
                                <option value="mulher">Feminino</option>
                                <option value="outro">Outros</option>
                            </select>
                        </div>
                        <button>Salvar</button>
                    </div>
                    <button>editar</button>
                </div>
                <div className="personalInfo-sexo-container border-bottom border-secondary">
                    <h2>Sexo</h2>
                    <div className="personalInfo-sexo">
                        <div className="personalInfo-changeSexo">
                            <select name="" id="" defaultValue="Não especificado">
                                <option value=""></option>
                                <option value="homen">Masculino</option>
                                <option value="mulher">Feminino</option>
                                <option value="outro">Outros</option>
                            </select>
                        </div>
                        <button>Salvar</button>
                    </div>
                    <button>editar</button>
                </div>
                <div className="personalInfo-nascimento-container border-bottom border-secondary">
                    <h2>Data de nascimento</h2>
                    <div className="personalInfo-nascimento">
                        <div className="personalInfo-changeSexo">
                            <input type="date" />
                        </div>
                        <button>Salvar</button>
                    </div>
                    <button>editar</button>
                </div>
                <div className="personalInfo-email-container border-bottom border-secondary">
                    <h2>Endereço de email</h2>
                    <p>Use um endereço de email a qual tenha acesso</p>
                    <div className="personalInfo-nascimento">
                        <div className="personalInfo-changeSexo">
                            <label htmlFor="email">Endereço de email</label>
                            <input type="email" id="email" />
                        </div>
                        <button>Salvar</button>
                    </div>
                    <button>editar</button>
                </div>
                <div className="personalInfo-telefone-container border-bottom border-secondary">
                    <h2>Data de nascimento</h2>
                    <p>Adicione um numero de telefone para que os hospedes e o mybnb possa entrar em contato.</p>
                    <div className="personalInfo-telefone">
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
                        <button>Verificar</button>
                    </div>
                    <button>editar</button>
                </div>
                <div className="personalInfo-endereco-container border-bottom">
                    <h2>Endereço</h2>
                    <div className="personalInfo-endereco border border-bottom">
                        <div className="personalInfo-changeEndereco">
                            <label htmlFor="endereco">Endereço</label>
                            <input type="text" id="endereco" />
                        </div>
                        <button>Salvar</button>
                    </div>
                    <button>editar</button>
                </div>
            </main >
        </div >
    )
}