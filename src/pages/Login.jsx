export default function Login() {
    const social = [
        {
            name: "Facebook",
            logo:"https://eastmarketchurch.com/wp-content/uploads/2018/12/50-best-facebook-logo-icons-gif-transparent-png-images-19.png"
        },
        { 
            name: "Google", 
            logo: "https://th.bing.com/th/id/OIP.0OuKM7Opm2u41UmXpJGYxwAAAA?pid=ImgDet&rs=1" 
        },
        { 
            name: "email", 
            logo: "https://th.bing.com/th/id/OIP.9RcUGPQjcZjbS4102B7LkwHaHa?pid=ImgDet&rs=1" 
        }
    ]
    return (
        <div className="p-4 mb-5">
            <header>
                <h5 className="text-center mt-1">Entrar ou cadastrar-se</h5>
            </header>
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
                    <input id="phone" type="tel" className="inpt border border-secondary rounded-bottom ps-3 border-top-0" autoComplete="none" required />
                    <label className="lbl" htmlFor="phone">Número de telefone</label>
                </div>
                <div className="numConfirm mt-2">
                    <p className="text-center">Ligaremos ou enviaremos uma mensagem para confirmar seu numero.</p>
                </div>
                <button className="btn btn-primary p-2 col-11 my-1 mx-auto">Continue</button>
            </form>
            <p className="text-center my-4"> <span className="line"></span> ou <span className="line"></span></p>
            <div className="social container">
                {social.map((social, i) => <div key={i} className="rede my-3 py-3 text-center border border-dark rounded fw-bold d-flex justify-content-center position-relative">
                    <img src={social.logo} alt="" className="social-logo position-absolute"/>
                    Continuar com {social.name}</div>)}
            </div>
            <div className="help d-flex fw-bold mt-5">
                <a href="" className="text-dark mx-auto">needs help?</a>
            </div>
        </div>
    )
}