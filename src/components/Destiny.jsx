export default function Destiny({ handleOpenDestiny }) {

    const destinations = [
        {
            text: "Busca flexível",
            img: ""
        }
    ]


    function handleSelectAcomodation(e) {
        const btns = document.querySelectorAll(".destiny-btn")
        btns.forEach(btn => {
            btn.classList.remove("bottom-border")
            btn.classList.add("text-secondary")
        })
        e.target.classList.toggle("bottom-border")
        e.target.classList.toggle("text-secondary")
    }
    return (
        <div className="destiny-container container-fluid d-flex position-absolute top-0 pt-3 justify-content-center bg-light">
            <div className="destiny container-fluid px-2 rounded-4 bg-light position-relative">
                <header className="container-fluid pt-1 position-sticky top-0 
                    bg-light">
                    <button type="button" className="position-absolute      
                        border border-secondary rounded-5 fw-bold px-2 pt-0"
                        onClick={handleOpenDestiny}>
                        x
                    </button>
                    <div className="btns-container mx-auto d-flex justify-content-center">
                        <button type="button" className="destiny-btn        
                            bg-transparent fw-bold bottom-border" onClick={handleSelectAcomodation}>Acomodações
                        </button>
                        <button type="button" className="destiny-btn 
                            bg-transparent fw-bold text-secondary" onClick={handleSelectAcomodation}>Experiêcias
                        </button>
                    </div>
                </header>
                <main className="mt-5 ">
                    <h1 className="fs-4 fw-bold">Para onde?</h1>
                    <section className="find-destiny mt-3">
                        <div className="input-container position-relative d-flex align-items-center">
                            <label htmlFor="" className="form-label position-absolute mt-2 ms-3 fs-5">
                                <img src="https://svgsilh.com/svg_v2/3331255.svg" alt="" className="lupa"/>
                            </label>
                            <input type="text" className="form-control border-secondary py-3 ps-5" placeholder="Buscar destinos" />
                        </div>
                    </section>
                    <section className="row">
                        <button className="btn d-flex justify-content-between my-4">
                            <span className="text-muted">Quando</span>
                            <span>Adicionar datas</span>
                        </button>
                        <button className="btn d-flex justify-content-between">
                            <span className="text-muted">Quem</span>
                            <span>Adicionar hóspedes</span>
                        </button>
                    </section>
                    <section className="container position-absolute bottom-0 mb-3 d-flex justify-content-between">
                        <button className="btn fw-bold text-decoration-underline">Limpar tudo</button>
                        <button className="btn btn-danger p-2 px-3">
                            <span className="me-1">
                                <img src="https://i0.wp.com/academiaexcel.com/wp-content/uploads/2021/02/lupa-1.png?fit=256%2C256&ssl=1" alt="" className="lupa mb-1"/>
                            </span>
                            Buscar
                        </button>
                    </section>
                </main>
            </div>
        </div>
    )
}