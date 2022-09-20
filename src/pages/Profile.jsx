import { useDispatch, useSelector } from "react-redux"
import {logout} from "../assets/userSlice"

export default function Profile() {
    const user = useSelector(data => data.user)
    
    const dispatch = useDispatch()

    function handleLogout(){
        dispatch(logout())
        console.log("clicou")
    }

    return (
        <div className="user container container-fluid p-2 my-5">
            <section className="container d-flex flex-column my-2">
                <img src="" alt="" className="user-img" />
                <h1 className="user-name">{user.name}</h1>
                <a href="" className="text-dark mb-5">Mostrar perfil</a>
                <button className="btn position-relative  p-2 my-2">
                    <img src="" alt="" />
                    Informações pessoais
                    <span className="position-absolute end-0 top-0 fw-bold fs-3">&gt;</span>
                </button>
                <button className="btn position-relative  p-2 my-2">
                    <img src="" alt="" />
                    Conta
                    <span className="position-absolute end-0 top-0 fw-bold fs-3">&gt;</span>
                </button>
                <hr />
            </section>
            <section className="container d-flex flex-column my-2">
                <h2>Hospedagem</h2>
                <button className="btn position-relative  p-2 my-2">
                    <img src="" alt="" />
                    Hospede uma acomodação
                    <span className="position-absolute end-0 top-0 fw-bold fs-3">&gt;</span>
                </button>
                <button className="btn position-relative  p-2 my-2">
                    <img src="" alt="" />
                    Hospede uma experiência
                    <span className="position-absolute end-0 top-0 fw-bold fs-3">&gt;</span>
                </button>
                <hr />
            </section>
            <section className="container d-flex flex-column my-2">
                <h2>Indicações e créditos</h2>
                <button className="btn position-relative  p-2 my-2">
                    <img src="" alt="" />
                    Indicar um anfitrião
                    <span className="position-absolute end-0 top-0 fw-bold fs-3">&gt;</span>
                </button>
                <hr />
            </section>
            <section className="container d-flex flex-column my-2">
                <h2>Atendimento</h2>
                <button className="btn position-relative  p-2 my-2">
                    <img src="" alt="" />
                    Como funciona o mybnb
                    <span className="position-absolute end-0 top-0 fw-bold fs-3">&gt;</span>
                </button>
                <hr />
            </section>
            <section className="container d-flex flex-column my-2">
                <div className="langAndMoney">
                    <button className="btn position-relative  p-2 my-2 fw-bolder">Português (BR)</button>
                    <button className="btn position-relative  p-2 my-2 fw-bolder">R$ BRL</button>
                </div>
                <button className="btn p-2 border border-dark fw-bold" onClick={() => handleLogout()}>Sair</button>
            </section>
            <footer>
                <p className="profile-footer">Esta aplicação foi desenvolvida no intuito de praticar programação e não tem nenhum fim comercial.</p>
            </footer>
        </div>
    )
}