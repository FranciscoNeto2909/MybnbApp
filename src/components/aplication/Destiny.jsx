import { ArrowLeft, MagnifyingGlass } from "phosphor-react"
import { useState } from "react"
import AutocompleteElem from "../acomodation/AutocompleteElem"
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function Destiny({ handleOpenDestiny }) {
    const [toggleClass, setToggleClass] = useState(true)
    const [cordenates, setCordenates] = useState("")
    const [localization, setLocalization] = useState("")
    const [btnId, setBtnId] = useState("btn-1")
    const [date, setDate] = useState("")
    const [hosts, setHosts] = useState("")
    const [step, setStep] = useState(0)

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

    function handleToggleClass() {
        setToggleClass(!toggleClass)
    }

    function handleSetResult(results) {
        setLocalization(results[0].formatted_address)
        setStep(step + 1)
    }

    function handleClearAll() {
        setLocalization("")
        setCordenates("")
        setDate("")
    }

    function handleSetDate(e) {
        setDate(e)
        setStep(step + 1)
    }

    function handleBackStep() {
        setStep(step - 1)
    }
    return (
        <div className="destiny-container container-fluid d-flex position-fixed top-0 pt-3 justify-content-center bg-light">
            <div className="destiny container-fluid px-2 rounded-4 bg-light position-relative">
                <header className="container-fluid pt-1 position-sticky top-0 
                    bg-light">
                    {step == 0 ?
                        <button type="button" className="position-absolute      
                        border border-secondary rounded-5 fw-bold px-2 pt-0 bg-transparent start-0"
                            onClick={handleOpenDestiny}>
                            x
                        </button> :
                        <ArrowLeft size={20} onClick={handleBackStep} className="position-absolute pt-0 start-0 mt-1" />}
                    <div className="btns-container mx-auto d-flex justify-content-center">
                        <button type="button" className={toggleClass ?
                            "destiny-btn bg-transparent border-bt p-2" :
                            "destiny-btn bg-transparent text-secondary p-2"}
                            onClick={handleToggleClass}>
                            Acomodações
                        </button>
                        <button type="button" className={toggleClass ?
                            "destiny-btn bg-transparent text-secondary p-2" : "destiny-btn bg-transparent border-bt p-2"}
                            onClick={handleToggleClass}>
                            Experiêcias
                        </button>
                    </div>
                </header>
                <main className="mt-5">
                    {step >= 2 && <>
                        <div className="d-flex justify-content-between align-items-baseline mb-5">
                            <p className="text-secondary font-smaller">Onde</p>
                            {localization ?
                                <p className="font-smaller">{localization}</p> :
                                <button className="bg-transparent border-0 font-smaller" onClick={() => setStep(1)}>Busca flexível</button>}
                        </div>
                        {step > 2 &&
                            <div className="d-flex justify-content-between align-items-baseline mb-5">
                                <p className="text-secondary font-smaller">Quando</p>
                                {date ?
                                    <p className="font-smaller">{date.toString().split(" ").slice(1, 4).toString()}</p> :
                                    <button className="bg-transparent border-0 font-smaller" onClick={() => setStep(2)}>Adicionar datas</button>}
                            </div>}
                    </>
                    }
                    {step < 2 &&
                        <>
                            <section className="container mt-3 p-2 rounded-4 bg-transparent">
                                <h1 className="fs-4 fw-bold mb-3">Para onde?</h1>
                                <AutocompleteElem setCordenates={setCordenates} handleSetResult={handleSetResult} setStep={setStep} step={step} />
                            </section>
                            {step == 0 && <>
                                <section className="destiny-maps d-flex justify-content-between m-2 mt-0">
                                    {
                                        destinations.map((dest, i) => (
                                            <div key={i} className="destiny-map mx-2 border border-2 rounded-3 d-flex flex-column align-items-center p-1">
                                                <img className="destiny-map-img p-2" src={dest.img} alt="" />
                                                <p className="destiny-text p-0 m-0">{dest.text}</p>
                                            </div>
                                        ))
                                    }
                                </section>
                                <section className="d-flex flex-column">
                                    <button className="data-guest-btn btn d-flex justify-content-between my-4 bg-white p-2 rounded-4" onClick={() => setStep(2)}>
                                        <span className="text-muted p-2">Quando</span>
                                        <span className="p-2">Adicionar datas</span>
                                    </button>
                                    <button className="data-guest-btn btn d-flex justify-content-between bg-white p-2 rounded-4" onClick={() => setStep(3)}>
                                        <span className="text-muted p-2">Quem</span>
                                        <span className="p-2">Adicionar hóspedes</span>
                                    </button>
                                </section>
                            </>}
                        </>
                    }
                    {step == 2 &&
                        <>
                            <div>
                                <h4 className="fw-bold ms-2">Quando é sua viagem?</h4>
                                <div className="dates-container container d-flex justify-content-center mt-3">
                                    <button className={btnId == "btn-1" ? "btn border border-secondary rounded-4 font-smaller me-1" : "btn rounded-4 font-smaller me-1"} onClick={e => setBtnId(e.target.id)} id="btn-1">Escolher data</button>
                                    <button className={btnId == "btn-2" ? "btn border border-secondary rounded-4 font-smaller ms-1" : "btn rounded-4 font-smaller ms-1"} onClick={e => setBtnId(e.target.id)} id="btn-2">Datas flexíveis</button>
                                </div>
                                <div className="datepicker-container mt-3 d-flex justify-content-center">
                                    <Datepicker
                                        className="react-datepicker form-control text-center" selected={date} dateFormat="dd / MMM / yyyy"
                                        onChange={e => handleSetDate(e)}
                                        inline
                                        minDate={new Date()}
                                    ></Datepicker>
                                </div>
                            </div>
                        </>}
                </main>
            </div>
            <div className="container-fluid position-absolute bottom-0 mb-2 d-flex justify-content-between border-top">
                <button className="border-0 fw-bold mt-3 text-decoration-underline bg-transparent" onClick={handleClearAll}>Limpar tudo</button>
                {hosts ?
                    <button className="btn btn-danger py-2 px-3 mt-3">
                        <span className="me-1">
                            <MagnifyingGlass size={22} className="mb-1" />
                        </span>
                        Buscar
                    </button> : <button className="btn bg-black text-light py-2 px-3 mt-3">Avançar</button>}
            </div>
        </div>
    )
}