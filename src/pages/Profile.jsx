import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout, setUserImage } from "../assets/userSlice"
import { UserCircle, Gear, Camera, AlignLeft, Gift, SquaresFour, CaretRight, ToggleRight, ToggleLeft, HouseLine } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import { hideNav } from "../assets/appSlice"

export default function Profile() {
    const user = useSelector(data => data.user)
    const userAcomodations = useSelector(data => data.acomodation.acomodation.filter(acmd => acmd.hostName == user.user.name))
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [image, setImage] = useState("")

    function handleLogout() {
        dispatch(logout())
        localStorage.removeItem("userId")
        localStorage.removeItem("token")
        localStorage.setItem("routeId", 1)
        navigate("/")

    }
    function handleOpenPersonalInfos() {
        dispatch(hideNav())
        navigate("/profile/personal-infos")
    }

    function handleOpenAccount() {
        dispatch(hideNav())
        navigate("/profile/account")
    }

    function handleOpenAcomodationHost() {
        dispatch(hideNav())
        navigate("/profile/acomodation-host")
    }

    function handleOpenUserAcomodations() {
        dispatch(hideNav())
        navigate("/profile/my-acomodations")
    }

    async function handleGetUserImage() {
        setImage(`https://mybnb-api.onrender.com/profile/${user.user.image}`)
    }

    async function handleChangeUserImage(e) {
        const image = await e.target.files[0]
        dispatch(setUserImage(image))
    }
    useEffect(() => {
        if (user.user.image) {
            handleGetUserImage()
        }
    }, [])

    return (
        <div className="user container container-fluid p-2 my-5">
            <section className="container d-flex flex-column my-3">
                {user.user.image ?
                    <div className="user-image position-relative">
                        <label htmlFor="image">
                            <Camera size={18} className="position-absolute top-50 ms-3 mt-2 text-light" />
                            <img src={image} className="profile-img rounded-4" alt="" />
                            <input type="file" id="image" className="d-none" accept="image/*" alt="user profile" onChange={e => handleChangeUserImage(e)} />
                        </label>
                    </div>
                    :
                    <div className="user-image position-relative">
                        <label htmlFor="image">
                            <Camera size={18} className="position-absolute top-50 ms-4 mt-2" />
                            <UserCircle size={65} />
                            <input type="file" id="image" className="d-none" accept="image/*" onChange={e => handleChangeUserImage(e)} />
                        </label>
                    </div>
                }
                <h1 className="user-name fw-bold mt-2">{user.name}</h1>
                <a href="" className="text-dark mb-5">Mostrar perfil</a>
                <button className="btn position-relative  p-2 my-2 text-start" onClick={handleOpenPersonalInfos}>
                    <UserCircle size={30} className="me-4" />
                    Informações pessoais
                    <CaretRight size={30} className="position-absolute end-0" />
                </button>
                <button className="btn position-relative  p-2 my-2 text-start" onClick={handleOpenAccount}>
                    <Gear size={30} className="me-4" />
                    Conta
                    <CaretRight size={30} className="position-absolute end-0" />
                </button>
                <hr />
            </section>
            <section className="container d-flex flex-column my-2">
                <h2>Hospedagem</h2>
                <button className="btn position-relative d-flex p-2 my-2 text-start align-items-baseline" onClick={handleOpenAcomodationHost}>
                    <div className="toggles-container d-flex flex-column position-relative me-4">
                        <ToggleLeft size={25} className="m-0 position-absolute top-50" />
                        <ToggleRight size={25} className="m-0 position" />
                    </div>
                    Hospede uma acomodação
                    <CaretRight size={30} className="position-absolute end-0" />
                </button>
                { userAcomodations.length > 0 && <button className="btn position-relative d-flex p-2 my-2 text-start align-items-center" onClick={handleOpenUserAcomodations}>
                    <div className="houses-container d-flex me-3">
                        <HouseLine size={32} className="" />
                    </div>
                    Minhas acomodações
                    <CaretRight size={30} className="position-absolute end-0" />
                </button>}
                <button className="btn position-relative  p-2 my-2 text-start">
                    <AlignLeft size={32} className="me-3" />
                    Hospede uma experiência
                    <CaretRight size={30} className="position-absolute end-0" />
                </button>
                <hr />
            </section>
            <section className="container d-flex flex-column my-2">
                <h2>Indicações e créditos</h2>
                <button className="btn position-relative  p-2 my-2 text-start">
                    <Gift size={32} className="me-4" />
                    Indicar um anfitrião
                    <CaretRight size={30} className="position-absolute end-0" />
                </button>
                <hr />
            </section>
            <section className="container d-flex flex-column my-2">
                <h2>Atendimento</h2>
                <button className="btn position-relative  p-2 my-2 text-start">
                    <SquaresFour size={32} className="me-4 " />
                    Como funciona o mybnb
                    <CaretRight size={30} className="position-absolute end-0" />
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
                <p className="profile-footer">Esta aplicação foi desenvolvida no intuito de praticar programação. Não tem nenhum fim comercial ou financeiro.</p>
            </footer>
        </div>
    )
}