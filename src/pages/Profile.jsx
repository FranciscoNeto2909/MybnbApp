import { useDispatch, useSelector } from "react-redux"
import { logout } from "../assets/userSlice"
import { UserCircle, Gear, FadersHorizontal, AlignLeft, Gift, SquaresFour, CaretRight } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import { hideNav } from "../assets/appSlice"

export default function Profile() {
    const user = useSelector(data => data.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logout())
        navigate("/")
    }
    function handleOpenPersonalInfos() {
        dispatch(hideNav())
        navigate("/profile/personal-infos")
    }

    return (
        <div className="user container container-fluid p-2 my-5">
            <section className="container d-flex flex-column my-2">
                <UserCircle size={80} />
                <h1 className="user-name">{user.name}</h1>
                <a href="" className="text-dark mb-5">Mostrar perfil</a>
                <button className="btn position-relative  p-2 my-2 text-start" onClick={handleOpenPersonalInfos}>
                    <UserCircle size={30} className="me-4" />
                    Informações pessoais
                    <CaretRight size={30} className="position-absolute end-0"/>
                </button>
                <button className="btn position-relative  p-2 my-2 text-start">
                    <Gear size={30} className="me-4" />
                    Conta
                    <CaretRight size={30} className="position-absolute end-0"/>
                </button>
                <hr />
            </section>
            <section className="container d-flex flex-column my-2">
                <h2>Hospedagem</h2>
                <button className="btn position-relative  p-2 my-2 text-start">
                    <FadersHorizontal size={30} className="me-4" />
                    Hospede uma acomodação
                    <CaretRight size={30} className="position-absolute end-0"/>
                </button>
                <button className="btn position-relative  p-2 my-2 text-start">
                    <AlignLeft size={32} className="me-4" />
                    Hospede uma experiência
                    <CaretRight size={30} className="position-absolute end-0"/>
                </button>
                <hr />
            </section>
            <section className="container d-flex flex-column my-2">
                <h2>Indicações e créditos</h2>
                <button className="btn position-relative  p-2 my-2 text-start">
                    <Gift size={32} className="me-4" />
                    Indicar um anfitrião
                    <CaretRight size={30} className="position-absolute end-0"/>
                </button>
                <hr />
            </section>
            <section className="container d-flex flex-column my-2">
                <h2>Atendimento</h2>
                <button className="btn position-relative  p-2 my-2 text-start">
                    <SquaresFour size={32} className="me-4 " />
                    Como funciona o mybnb
                    <CaretRight size={30} className="position-absolute end-0"/>
                </button>
                <hr />
            </section>
            <section className="container d-flex flex-column my-2">
                <div className="langAndMoney">
                    <button className="btn position-relative  p-2 my-2 fw-bolder">Português (BR)</button>
                    <button className="btn position-relative  p-2 my-2 fw-bolder">R$ BRL</button>
                </div>
                <button className="btn p-2 border border-dark fw-bold" onClick={handleLogout}>Sair</button>
            </section>
            <footer>
                <p className="profile-footer">Esta aplicação foi desenvolvida no intuito de praticar programação e não tem nenhum fim comercial.</p>
            </footer>
        </div>
    )
}