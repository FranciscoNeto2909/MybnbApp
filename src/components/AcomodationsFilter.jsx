import { useState } from "react"
import { useDispatch } from "react-redux"
import { hideNav, showNav } from "../assets/appSlice"
import CompostCheckButton from "./CompostCheckButton"
import PropertyTypeButton from "./PropTypeButton"
import SimpleCheckButton from "./SimpleCheckButton"

export default function AcomodationsFilter() {
    const sizes = [5, 5, 10, 20, 25, 40, 45, 55, 60, 70, 75, 80, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 15, 10, 5, 3, 1]
    const quantity = [1, 2, 3, 4, 5, 6, 7, "8+"]
    const [bRoom, setBRoom] = useState(0)
    const [room, setRoom] = useState(0)
    const [bthRoom, setBthRoom] = useState(0)
    const [property, setProperty] = useState("")
    const [convenience, setConvenience] = useState("")
    const [lang, setLang] = useState("")
    const dispatch = useDispatch()
    function handleSelectBdRooms(e) {
        setBRoom(e.target.innerText)
        const bdRooms = document.querySelectorAll(".bdRooms")
        bdRooms.forEach(btn => btn.classList.remove("selected"))
        e.target.classList.toggle("selected")
    }
    function handleSelectBeeds(e) {
        setRoom(e.target.innerText)
        const beeds = document.querySelectorAll(".beeds")
        beeds.forEach(btn => btn.classList.remove("selected"))
        e.target.classList.toggle("selected")

    }
    function handleSelectBthRooms(e) {
        setBthRoom(e.target.innerText)
        const bthRooms = document.querySelectorAll(".bthRooms")
        bthRooms.forEach(btn => btn.classList.remove("selected"))
        e.target.classList.add("selected")
    }
    function handleOpenFilter() {
        dispatch(showNav())
    }
    return (
        <div className="acmd-filter-container container-fluid d-flex position-absolute top-0 pt-3 justify-content-center">
            <div className="acmd-filter px-2 rounded-4 bg-light position-relative">
                <header className="acmd-header pt-3 position-sticky top-0 container-fluid bg-light">
                    <button className="close-btn position-absolute border-0 fw-bold m-0 p-0 top-0 bg-transparent" onClick={handleOpenFilter}>x</button>
                    <h1 className="text-center fs-4">Filtros</h1>
                </header>
                <main className="filter-main">
                    <section className="acmd-price mt-5">
                        <h2 className="fs-5">Faixa de preço</h2>
                        <p className="acmd-price-desc text-secondary">O preço médio por noite é R$988</p>
                        <div className="acmd-price-table container-fluid d-flex mb-4 align-items-baseline mt-5 justify-content-center">
                            {
                                sizes.map((size, i) => (
                                    <div key={i} style={{ height: `${size}px` }} className="acmd-price-item"></div>
                                ))
                            }
                        </div>
                        <div className="price-table container-fluid d-flex align-items-center justify-content-center">
                            <div className="min-price-container position-relative">
                                <label htmlFor="minPrice" className="price-lbl position-absolute text-secondary" >preço mínimo</label>
                                <input type="text" id="minPrice" className="price-input form-control pt-4 border-secondary" value={`R$ ${50}`} onChange={() => { }} />
                            </div>
                            <span className="col-1 fs-1 fw-light text-center">-</span>
                            <div className="max-price-container position-relative">
                                <label htmlFor="maxPrice" className="price-lbl position-absolute text-secondary" >preço máximo</label>
                                <input type="text" id="maxPrice" className="price-input form-control pt-4 border-secondary" value={`R$ ${5000}+`} onChange={() => { }} />
                            </div>
                        </div>
                    </section>
                    <section className="place-type mt-5">
                        <h2 className="fs-5 mb-4">Tipo de lugar</h2>
                        <CompostCheckButton text1="espaço inteiro" text2="Um lugar só para você" value="espacoInteiro" />

                        <CompostCheckButton text1="Quarto inteiro" text2="Seu próprio quarto em uma cas ou hotel, além de alguns espaços comuns compartilhados" value="quartoInteiro" />

                        <CompostCheckButton text1="Quarto compartilhado" text2="Um espaço para dormir e áreas comuns que podem ser compartilhadas com outras pessoas" value="quartoCompartilhado" />
                    </section>
                    <section className="mt-5">
                        <h2 className="fs-5 mb-4">Quartos e camas</h2>
                        <div className="comodos-container mb-3">
                            <h5 className="fs-6 ">Quartos</h5>
                            <div className="comodos-carroussel d-flex">
                                <button className="bdRooms comodos-btn selected rounded-5 mx-2 px-4 border" onClick={handleSelectBdRooms}>qualquer um</button>
                                {
                                    quantity.map((option, i) => (
                                        <button key={i} className="bdRooms comodos-btn rounded-5 mx-2 px-4 border" onClick={handleSelectBdRooms}>{option}</button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="comodos-container mb-3">
                            <h5 className="fs-6">Camas</h5>
                            <div className="comodos-carroussel d-flex">
                                <button className="beeds comodos-btn selected rounded-5 mx-2 px-4 border" onClick={handleSelectBeeds}>qualquer um</button>
                                {
                                    quantity.map((option, i) => (
                                        <button key={i} className="beeds comodos-btn rounded-5 mx-2 px-4 border" onClick={handleSelectBeeds}>{option}</button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="comodos-container mb-3">
                            <h5 className="fs-6">Banheiros</h5>
                            <div className="comodos-carroussel d-flex">
                                <button className="bthRooms comodos-btn selected rounded-5 mx-2 px-4 border" onClick={handleSelectBthRooms}>qualquer um</button>
                                {
                                    quantity.map((option, i) => (
                                        <button key={i} className="bthRooms comodos-btn rounded-5 mx-2 px-4 border" onClick={handleSelectBthRooms}>{option}</button>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                    <section className="mt-5">
                        <h2 className="fs-5 mb-4">Tipo de propriedade</h2>
                        <div className="container row row-cols-2 mx-auto">
                                <div className="col">
                                    <PropertyTypeButton text="Casa"
                                        img="https://comofazeremcasa.net/wp-content/uploads/2020/05/desenho-de-casa-para-colorir-10.jpg"
                                        setProperty={setProperty} />
                                </div>
                                <div className="col">
                                    <PropertyTypeButton text="Apartamento"
                                        img="https://static.vecteezy.com/system/resources/previews/004/589/681/original/hotel-building-line-icon-vector.jpg"
                                        setProperty={setProperty} />
                                </div>
                                <div className="col">
                                    <PropertyTypeButton text="Casa de hóspedes"
                                        img="https://cdn5.colorir.com/desenhos/pintar/casa-con-dois-pavimenti_2.png"
                                        setProperty={setProperty} />
                                </div>
                                <div className="col">
                                    <PropertyTypeButton text="Hotel"
                                        img="https://www.colorironline.com/images/imgcolor/desenho-mansao-3-para-colorir.jpg"
                                        setProperty={setProperty} />
                                </div>
                        </div>
                    </section>
                    <section className="mt-5">
                        <h2 className="fs-5 mb-4">Comodidades</h2>
                        <h5 className="fs-6 mb-4">Itens básicos</h5>
                        <SimpleCheckButton text="Wi-Fi" value="wifi" func={setConvenience} />
                        <SimpleCheckButton text="Cozinha" value="cozinha" setConvenience={setConvenience} />
                        <SimpleCheckButton text="Televisor" value="televisor" func={setConvenience} />
                        <SimpleCheckButton text="Máquina de lavar" value="maquinaDeLavar" func={setConvenience} />
                    </section>
                    <section className="mt-5">
                        <h2 className="fs-5 mb-4">Opções de reserva</h2>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">instant reserv</label>
                            <p className="text-secondary">Acomodações que você pode reservar sem ter que esperar pela aprovação do anfitrião</p>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Self check-in</label>
                            <p className="text-secondary">Acesso fácil a propriedade assim que chegar</p>
                        </div>
                    </section>
                    <section className="mt-5 mb-4">
                        <h2 className="fs-5 mb-4">Idioma do anfitrião</h2>
                        <SimpleCheckButton text="Português" value="portugues" func={setLang} />
                        <SimpleCheckButton text="Inglês" value="ingles" func={setLang} />
                        <SimpleCheckButton text="Françes" value="frances" func={setLang} />
                        <SimpleCheckButton text="Alemão" value="alemao" func={setLang} />
                    </section>
                </main>
            </div>
        </div>
    )
}