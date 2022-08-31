import { useState } from "react"

export default function AcomodationsFilter({ handleOpenFilter }) {
    const sizes = [5, 5, 10, 20, 25, 40, 45, 50, 60, 65, 70, 60, 75, 70, 65, 80, 70, 75, 65, 60, 55, 65, 60, 50, 55, 40, 25, 20, 25, 15, 10, 5, 3, 1]
    const quantity = [1, 2, 3, 4, 5, 6, 7, "8+"]
    const [bRoom, setBRoom] = useState(0)
    const [room, setRoom] = useState(0)
    const [bthRoom, setBthRoom] = useState(0)
    const [property, setProperty] = useState("")
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
    return (
        <div className="acmd-filter-container container-fluid d-flex position-absolute top-0 pt-3">
            <div className="acmd-filter container rounded-4 bg-light position-relative">
                <header className="acmd-header pt-3 position-sticky top-0 container-fluid bg-light">
                    <button className="close-btn position-absolute border-0 fw-bold m-0 p-0 top-0 bg-transparent" onClick={handleOpenFilter}>x</button>
                    <h1 className="text-center fs-4">Filtros</h1>
                </header>
                <main className="filter-main">
                    <section className="acmd-price mt-4">
                        <h2 className="fs-5 mt-5">Faixa de preço</h2>
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
                    <section className="place-type">
                        <h2 className="mt-4 fs-5">Tipo de lugar</h2>
                        <div className="form-check container d-flex justify-content-between">
                            <label className="form-check-label" htmlFor="espaco">
                                Espaço inteiro <br /> <span className="text-secondary">Um lugar só para você</span>
                            </label>
                            <input className="form-check-input border-secondary p-2" type="checkbox" value="" id="espaco" />
                        </div>
                        <div className="form-check container d-flex justify-content-between">
                            <label className="form-check-label" htmlFor="quarto">
                                Quarto inteiro <br /> <span className="text-secondary">Seu próprio quarto em uma cas ou hotel, além de alguns espaços comuns compartilhados</span>
                            </label>
                            <input className="form-check-input border-secondary p-2" type="checkbox" value="" id="quarto" />
                        </div>
                        <div className="form-check container d-flex justify-content-between">
                            <label className="form-check-label" htmlFor="compartilhado">
                                Quarto compartilhado <br /> <span className="text-secondary">Um espaço para dormir e áreas comuns que podem ser compartilhadas com outras pessoas</span>
                            </label>
                            <input className="form-check-input border-secondary p-2" type="checkbox" value="" id="compartilhado" />
                        </div>
                    </section>
                    <section className="mt-5">
                        <h2 className="fs-5">Quartos e camas</h2>
                        <div className="comodos-container mb-3">
                            <h5 className="fs-6 ">Quartos</h5>
                            <div className="comodos-carroussel d-flex">
                                <button className="bdRooms comodos-btn selected rounded-5 mx-2 px-4" onClick={handleSelectBdRooms}>qualquer um</button>
                                {
                                    quantity.map((option, i) => (
                                        <button key={i} className="bdRooms comodos-btn rounded-5 mx-2 px-4" onClick={handleSelectBdRooms}>{option}</button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="comodos-container mb-3">
                            <h5 className="fs-6">Camas</h5>
                            <div className="comodos-carroussel d-flex">
                                <button className="beeds comodos-btn selected rounded-5 mx-2 px-4" onClick={handleSelectBeeds}>qualquer um</button>
                                {
                                    quantity.map((option, i) => (
                                        <button key={i} className="beeds comodos-btn rounded-5 mx-2 px-4" onClick={handleSelectBeeds}>{option}</button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="comodos-container mb-3">
                            <h5 className="fs-6">Banheiros</h5>
                            <div className="comodos-carroussel d-flex">
                                <button className="bthRooms comodos-btn selected rounded-5 mx-2 px-4" onClick={handleSelectBthRooms}>qualquer um</button>
                                {
                                    quantity.map((option, i) => (
                                        <button key={i} className="bthRooms comodos-btn rounded-5 mx-2 px-4" onClick={handleSelectBthRooms} value>{option}</button>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="fs-5">Tipo de propriedade</h2>
                        <div class="container">
                            <div class="row row-cols-2">
                                <div class="col">
                                    <button className="property bg-light border border-secondary
                                px-3 rounded d-flex flex-column
                                align-items-center" onClick={()=>setProperty("casa")}>
                                        <img src="https://comofazeremcasa.net/wp-content/uploads/2020/05/desenho-de-casa-para-colorir-10.jpg" alt="casa" className="property-item" />
                                        <p>Casa</p>
                                    </button>
                                </div>
                                <div class="col">
                                    <button className="property bg-light border border-secondary
                                px-3 rounded d-flex flex-column 
                                align-items-center" onClick={()=>setProperty("apartamento")}>
                                        <img src="https://static.vecteezy.com/system/resources/previews/004/589/681/original/hotel-building-line-icon-vector.jpg" alt="apartamento" className="property-item" />
                                        <p>Apartamento</p>
                                    </button>
                                </div>
                                <div class="col">
                                    <button className="property bg-light border border-secondary
                                px-3 rounded d-flex flex-column
                                align-items-center" onClick={()=>setProperty("casa de hospedes")} >
                                        <img src="https://cdn5.colorir.com/desenhos/pintar/casa-con-dois-pavimenti_2.png" alt="" className="property-item" />
                                        <p>Casa de hóspedes</p>
                                    </button>
                                </div>
                                <div class="col">
                                    <button className="property bg-light border border-secondary
                                px-3 rounded d-flex flex-column align-items-center" onClick={()=>setProperty("hotel")}>
                                        <img src="https://www.colorironline.com/images/imgcolor/desenho-mansao-3-para-colorir.jpg" alt="" className="property-item" />
                                        <p>hotel</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}