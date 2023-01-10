import { ArrowLeft, MagnifyingGlass, Minus, Plus } from "phosphor-react"
import { useState } from "react"
import AutocompleteElem from "../acomodation/AutocompleteElem"
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useDispatch } from "react-redux"
import { setDestiny } from "../../assets/appSlice"

export default function Destiny({ handleOpenDestiny, setFilterDestiny }) {
    const dispatch = useDispatch()
    const [headerBtn, setHeaderBtn] = useState("headerB1")
    const [cordenates, setCordenates] = useState("")
    const [localization, setLocalization] = useState("")
    const [btnId, setBtnId] = useState("btn-1")
    const [date, setDate] = useState("")
    const [hosts, setHosts] = useState(
        {
            adults: 0,
            kids: 0,
            babies: 0,
            animals: 0
        })
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
    }

    function handleBackStep() {
        setStep(step - 1)
    }

    function handleAddHosts(hostType) {
        if (hostType == "adult") {
            setHosts({ ...hosts, adults: hosts.adults + 1 })
        } else if (hostType == "kid") {
            setHosts({ ...hosts, kids: hosts.kids + 1 })
        } else if (hostType == "babie") {
            setHosts({ ...hosts, babies: hosts.babies + 1 })
        } else if (hostType == "animal") {
            setHosts({ ...hosts, animals: hosts.animals + 1 })
        }
    }

    function handleremoveHosts(hostType) {
        if (hostType == "adult" && hosts.adults > 0) {
            setHosts({ ...hosts, adults: hosts.adults - 1 })
        } else if (hostType == "kid" && hosts.kids > 0) {
            setHosts({ ...hosts, kids: hosts.kids - 1 })
        } else if (hostType == "babie" && hosts.babies > 0) {
            setHosts({ ...hosts, babies: hosts.babies - 1 })
        } else if (hostType == "animal" && hosts.animals > 0) {
            setHosts({ ...hosts, animals: hosts.animals - 1 })
        }
    }

    function handleFilter() {
        const local = localization.split(",").slice(0, 2).toString()
        const newDate = date.toString().split(" ").slice(1, 4).toString()
        let sum = Object.values(hosts).reduce((acc, val) => acc + val, 0);
        handleOpenDestiny()
        if (local || newDate || sum) {
            dispatch(setDestiny())
            setFilterDestiny({
                localization: local,
                cordenates,
                hosts: sum,
                date: newDate
            })
        }
    }
    return (
        <div className="destiny-container container-fluid d-flex position-fixed top-0 pt-3 justify-content-center bg-light">
            <div className="destiny container-fluid px-2 rounded-4 bg-light position-relative">
                <header className="container-fluid position-sticky top-0 
                    bg-light">
                    {step == 0 ?
                        <button type="button" className="position-absolute      
                        border border-secondary rounded-5 fw-bold px-2 pt-0 bg-transparent start-0"
                            onClick={handleOpenDestiny}>
                            x
                        </button> :
                        <ArrowLeft size={20} onClick={handleBackStep} className="position-absolute pt-0 start-0 mt-2" />}
                    <div className="btns-container mx-auto d-flex justify-content-center">
                        <button type="button" id="headerB1" className={headerBtn == "headerB1" ?
                            "destiny-btn bg-transparent border-bt" :
                            "destiny-btn bg-transparent text-secondary"}
                            onClick={e => setHeaderBtn(e.target.id)}>
                            Acomodações
                        </button>
                        <button type="button" id="headerB2" className={headerBtn == "headerB2" ?
                            "destiny-btn bg-transparent border-bt" : "destiny-btn bg-transparent text-secondary"}
                            onClick={e => setHeaderBtn(e.target.id)}>
                            Experiêcias
                        </button>
                    </div>
                </header>
                <main className="mt-5">
                    {step >= 2 && <>
                        <button className="shadows container d-flex justify-content-between align-items-baseline bg-white py-3 px-2 mb-3 rounded-4 border-0" onClick={() => setStep(1)}>
                            <span className="text-secondary font-smaller">Onde</span>
                            {localization ?
                                <span className="font-smaller">{localization.split(",").slice(0, 2).toString()}</span> :
                                <span className="font-smaller">Busca flexível</span>}
                        </button>
                        {step > 2 &&
                            <button className="shadows d-flex container border-0 justify-content-between align-items-baseline bg-white py-3 px-2 mb-3 rounded-4" onClick={() => setStep(2)}>
                                <span className="text-secondary font-smaller">Quando</span>
                                {date ?
                                    <span className="font-smaller">{date.toString().split(" ").slice(1, 4).toString()}</span> :
                                    <span className="bg-transparent border-0 font-smaller">Adicionar datas</span>}
                            </button>}
                    </>
                    }
                    {step < 2 &&
                        <>
                            <section className="container mt-3 p-2 rounded-4 bg-transparent">
                                <h1 className="fs-5 fw-bold mb-3">Para onde?</h1>
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
                    {
                        step == 3 &&
                        <div className="hosts shadows p-4 bg-white rounded-4">
                            <h4 className="fw-bold">Quem está vindo?</h4>
                            <div className="hosts-container">
                                <div className="hosts-button d-flex justify-content-between mb-3 bottom-border">
                                    <div className="hosts-type">
                                        <p className="mb-0">Adultos</p>
                                        <p className="font-smaller text-secondary">16 anos ou mais</p>
                                    </div>
                                    <div className="hosts-buttons d-flex">
                                        <button onClick={() => handleremoveHosts("adult")} className={hosts.adults > 0 ? "p-0 rounded-5 border border-dark text-dark bg-transparent" : "p-0 rounded-5 border border-secondary text-secondary bg-transparent"} style={{ height: "29px", width: "29px" }}>
                                            <Minus size={16} />
                                        </button>
                                        <p className="fs-5 mx-3">{hosts.adults}</p>
                                        <button onClick={() => handleAddHosts("adult")} className="p-0 rounded-5 border border-dark bg-transparent" style={{ height: "29px", width: "29px" }}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="hosts-button d-flex justify-content-between mb-3 bottom-border">
                                    <div className="hosts-type">
                                        <p className="mb-0">Crianças</p>
                                        <p className="font-smaller text-secondary">Idade entre 2 e 15</p>
                                    </div>
                                    <div className="hosts-buttons d-flex">
                                        <button onClick={() => handleremoveHosts("kid")} className={hosts.kids > 0 ? "p-0 rounded-5 border border-dark text-dark bg-transparent" : "p-0 rounded-5 border border-secondary text-secondary bg-transparent"} style={{ height: "29px", width: "29px" }}>
                                            <Minus size={16} />
                                        </button>
                                        <p className="fs-5 mx-3">{hosts.kids}</p>
                                        <button onClick={() => handleAddHosts("kid")} className="p-0 rounded-5 border border-dark bg-transparent" style={{ height: "29px", width: "29px" }}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="hosts-button d-flex justify-content-between mb-3 bottom-border">
                                    <div className="hosts-type">
                                        <p className="mb-0">Bebês</p>
                                        <p className="font-smaller text-secondary">Menor de 2</p>
                                    </div>
                                    <div className="hosts-buttons d-flex">
                                        <button onClick={() => handleremoveHosts("babie")} className={hosts.babies > 0 ? "p-0 rounded-5 border border-dark text-dark bg-transparent" : "p-0 rounded-5 border border-secondary text-secondary bg-transparent"} style={{ height: "29px", width: "29px" }}>
                                            <Minus size={16} />
                                        </button>
                                        <p className="fs-5 mx-3">{hosts.babies}</p>
                                        <button onClick={() => handleAddHosts("babie")} className="p-0 rounded-5 border border-dark bg-transparent" style={{ height: "29px", width: "29px" }}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="hosts-button d-flex justify-content-between">
                                    <div className="hosts-type">
                                        <p className="mb-0">Animais de estimação</p>
                                        <p className="font-smaller text-secondary"></p>
                                    </div>
                                    <div className="hosts-buttons d-flex">
                                        <button onClick={() => handleremoveHosts("animal")} className={hosts.animals > 0 ? "p-0 rounded-5 border border-dark text-dark bg-transparent" : "p-0 rounded-5 border border-secondary text-secondary bg-transparent"} style={{ height: "29px", width: "29px" }}>
                                            <Minus size={16} />
                                        </button>
                                        <p className="fs-5 mx-3">{hosts.animals}</p>
                                        <button onClick={() => handleAddHosts("animal")} className="p-0 rounded-5 border border-dark bg-transparent" style={{ height: "29px", width: "29px" }}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </main>
            </div>
            {step != 1 &&
                <div className="container-fluid position-absolute bottom-0 mb-2 d-flex justify-content-between border-top">
                    <button className="border-0 fw-bold mt-3 text-decoration-underline bg-transparent" onClick={handleClearAll}>Limpar tudo</button>
                    {step == 0 || step == 3 ?
                        <button className="btn btn-danger py-2 px-3 mt-3" onClick={handleFilter}>
                            <span className="me-1">
                                <MagnifyingGlass size={22} className="mb-1" />
                            </span>
                            Buscar
                        </button> : <button className="btn bg-black text-light py-2 px-3 mt-3" onClick={() => setStep(3)}>Avançar</button>}
                </div>}
        </div>
    )
}