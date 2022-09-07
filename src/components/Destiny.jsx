export default function Destiny({ handleOpenDestiny }) {

    const destinations = [
        {
            text: "Busca flexível",
            img: "https://imgs.extra.com.br/1516775139/1xg.jpg?imwidth=500"
        },
        {
            text: "Brasil",
            img: "https://cdn-icons-png.flaticon.com/512/47/47442.png"
        },
        {
            text: "Europa",
            img: "https://svgsilh.com/svg_v2/151588.svg"
        },
        {
            text: "Argentina",
            img: "https://i.pinimg.com/originals/24/c0/c0/24c0c0efc1d494a55d4735081215780b.png"
        },
        {
            text: "Estados Unidos",
            img: "https://media.istockphoto.com/vectors/silhouette-map-vector-id1170167016?k=20&m=1170167016&s=170667a&w=0&h=tMHxJASg52WOwJjRnCgpN09ommAH5s7_gmAgXo1tmaI="
        },
        {
            text: "Portugal",
            img: "https://media.istockphoto.com/vectors/portugal-map-vector-illustration-country-isolated-background-vector-id1082851132?k=20&m=1082851132&s=612x612&w=0&h=wLILjsjT7iC-CSSCRkLHOS4v8QhBZN_-OebNAEeV1E8="
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
                        border border-secondary rounded-5 fw-bold px-2 pt-0 bg-transparent start-0"
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
                    <section className="find-destiny container mt-3 p-2 rounded-4 bg-white">
                        <h1 className="fs-4 fw-bold">Para onde?</h1>
                        <div className="input-container position-relative d-flex align-items-center">
                            <label htmlFor="" className="form-label position-absolute mt-2 ms-3 fs-5">
                                <img src="https://svgsilh.com/svg_v2/3331255.svg" alt="" className="lupa" />
                            </label>
                            <input type="text" className="form-control border-secondary py-3 ps-5" placeholder="Buscar destinos" />
                        </div>
                        <div className="destiny-maps d-flex justify-content-between m-2">
                            {
                                destinations.map((dest, i) => (
                                    <div className="destiny-map mx-2 border border-2 rounded-3 d-flex flex-column align-items-center p-1">
                                        <img className="destiny-map-img p-2" src={dest.img} alt="" />
                                        <p className="destiny-text p-0 m-0">{dest.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                    <section className="d-flex flex-column">
                        <button className="data-guest-btn btn d-flex justify-content-between my-4 bg-white p-2 rounded-4">
                            <span className="text-muted p-2">Quando</span>
                            <span className="p-2">Adicionar datas</span>
                        </button>
                        <button className="data-guest-btn btn d-flex justify-content-between bg-white p-2 rounded-4">
                            <span className="text-muted p-2">Quem</span>
                            <span className="p-2">Adicionar hóspedes</span>
                        </button>
                    </section>
                </main>
            </div>
            <div className="container-fluid position-absolute bottom-0 mb-2 d-flex justify-content-between border-top">
                <button className="border-0 fw-bold mt-3 text-decoration-underline bg-transparent">Limpar tudo</button>
                <button className="btn btn-danger p-2 px-3 mt-3">
                    <span className="me-1">
                        <img src="https://i0.wp.com/academiaexcel.com/wp-content/uploads/2021/02/lupa-1.png?fit=256%2C256&ssl=1" alt="" className="lupa mb-1" />
                    </span>
                    Buscar
                </button>
            </div>
        </div>
    )
}