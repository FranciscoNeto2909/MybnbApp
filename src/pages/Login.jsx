export default function Login() {
    const social = ["Facebook", "Google", "email"]
    return (
        <div className="p-3">
            <h5 className="text-center mt-1">Entrar ou cadastrar-se</h5>
            <h3 className="mt-5">Bem-vindo ao Mybnb</h3>
            <form action="" className="d-flex flex-column justify-content-center align-items-center mt-4">
                <div className="countrysDDD input-group-lg col-11 position-relative">
                    <select id="countrys" className="inpt border border-secondary rounded-top" required>
                        <option value=""></option>
                        <option value="">Brasil(+55)</option>
                        <option value="">Estados Unidos(+1)</option>
                        <option value="">Canada(+1)</option>
                        <option value="">Brasil(+49)</option>
                        <option value="">Reino unido(+44)</option>
                        <option value="">Russia(+7)</option>
                        <option value="">Argentina(+213)</option>
                    </select>
                    <label htmlFor="countrys" className="lbl">País/Região</label>
                </div>
                <div className="phone input-group-lg col-11 position-relative">
                    <input id="phone" type="tel" className="inpt border border-secondary rounded-bottom ps-3 border-top-0" autoComplete="none" required placeholder="xx x xxxxxxxx"/>
                    <label className="lbl" htmlFor="phone">Número de telefone</label>
                </div>
                <div className="numConfirm mt-2">
                    <p className="text-center">Ligaremos ou enviaremos uma mensagem para confirmar seu numero.</p>
                </div>
                <button className="btn btn-primary p-2 col-11 my-1 mx-auto">Continue</button>
            </form>
            <p className="text-center my-4"> <span className="line"></span> ou <span className="line"></span></p>
            <div className="social container">
                {social.map(social => <div className="rede my-3 py-3 text-center border border-dark rounded fw-bold">Continuar com {social}</div>)}
            </div>
            <div className="help d-flex fw-bold mt-5">
                <a href="" className="text-dark mx-auto">needs help?</a>
            </div>
        </div>
    )
}