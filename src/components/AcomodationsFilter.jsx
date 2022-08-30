import { useState } from "react"

export default function AcomodationsFilter({ handleOpenFilter }) {
    const sizes = [5, 5, 10, 20, 25, 40, 45, 50, 60, 65, 70, 60, 75, 70, 65, 80, 70, 75, 65, 60, 55, 65, 60, 50, 55, 40, 25, 20, 25, 15, 10, 5, 3, 1]
    const quantity = ["Qualquer um", 1, 2, 3, 4, 5, 6, 7, "8+"]
    const [bRoom, setBRoom] = useState("")
    const [room, setRoom] = useState("")
    const [bthRoom, setBthRoom] = useState("")

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
                                {
                                    quantity.map(option => (
                                        <button className="btn rounded-5 mx-2 px-4">{option}</button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="comodos-container mb-3">
                            <h5 className="fs-6">Camas</h5>
                            <div className="comodos-carroussel d-flex">
                                {
                                    quantity.map(option => (
                                        <button className="btn rounded-5 mx-2 px-4">{option}</button>
                                    ))
                                }
                            </div>
                        </div><div className="comodos-container  mb-3">
                            <h5 className="fs-6">Banheiros</h5>
                            <div className="comodos-carroussel d-flex">
                                {
                                    quantity.map(option => (
                                        <button className="btn rounded-5 mx-2 px-4"> {option}</button>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="fs-5">Tipo de propriedade</h2>
                        <div className="property-container">
                            <div className="property">
                                <img src="" alt="" />
                                <p>Casa</p>
                            </div>
                            <div className="property">
                                <img src="" alt="" />
                                <p>Apartamento</p>
                            </div>
                            <div className="property">
                                <img src="" alt="" />
                                <p>Casa de hóspedes</p>
                            </div>
                            <div className="property">
                                <img src="" alt="" />
                                <p>hotel</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}