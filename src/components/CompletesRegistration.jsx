import { userLogin } from "../assets/userSlice"
import { useDispatch } from "react-redux"
export default function CompleteRegistration() {
    const dispatch = useDispatch()
    function handleLogin(){
        dispatch(userLogin())
    }
    return (
        <>
            <header className="border border-bottom mb-3 py-3">
                <h1 className="fs-5 text-center">Concluir cadastro</h1>
            </header>
            <main className="container-fluid mb-5 p-4 d-flex flex-column">
                <section className="name-container container">
                    <div className="phone input-group-lg col-11 position-relative">
                        <input id="name" type="text" className="inpt border border-secondary rounded-top ps-3" autoComplete="none" required />
                        <label className="lbl" htmlFor="name">Name</label>
                    </div>
                    <div className="phone input-group-lg col-11 position-relative">
                        <input id="sobrenome" type="text" className="inpt border border-secondary rounded-bottom ps-3 border-top-0" autoComplete="none" required />
                        <label className="lbl" htmlFor="sobrenome">Sobrenome</label>
                    </div>
                    <p className="name-desc m-1">O nome que você colocar aqui ficara visivel para os outros usuarios</p>
                </section>
                <section className="birthday container my-4">
                    <details className="age-details">
                        <summary>Data de nascimento</summary>
                        <span>para se cadastrar deve ter mais de 18 anos.</span></details>
                    <input type="date"/>
                </section>
                <section className="Email-container container my-4">
                    <div className="phone input-group-lg col-11 position-relative">
                        <input id="email" type="email" className="inpt border border-secondary rounded ps-3" autoComplete="none" required />
                        <label className="lbl" htmlFor="email">Email</label>
                    </div>
                    <p className="email-desc my-2">Vamos enviar confirmações de viagem e recibos para voce por email.</p>
                </section>
                <p className="info-desc my-4">Esta informação veio de mybnb.</p>
                <section className="service-terms">
                    <p className="terms-desc mb-4">Ao selecionar <strong>Concordar e continuar</strong>, u concordo com os <a href="">termos de serviços</a>, <a href="">Politica de Não Discriminalização</a> e <a href="">Politica de Privacidade</a></p>
                </section>
                <button className="btn btn-primary" onClick={() => handleLogin()}>Concordar e continuar</button>
                <p className="notifi-desc mt-5">O mybnb enviará notificações de push, ideias inspiradoras, emails promocionais e ofertas exclusivas para membros. Você pode cancelar o recebimento dessas mensagens quando quiser ao acessas as cofigurações da sua conta ou diretamente nas notificações</p>
                <div className="form-check container d-flex justify-content-between">
                    <input className="form-check-input border-secondary p-2 me-2" type="checkbox" id="espaco" />
                    <label className="form-check-label" htmlFor="espaco">Não quero receber mensagens de marketing do mybnb</label>
                </div>
            </main>
        </>
    )
}