import { CaretLeft, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showNav } from "../assets/appSlice";
import AddAcomodation from "../components/acomodation/AddAcomodation";
import SpaceDesc from "../components/acomodation/SpaceDesc"
import { GoogleMap, Marker } from "@react-google-maps/api";
import AutocompleteElem from "../components/acomodation/AutocompleteElem"

export default function AcomodationHost() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [AddAcmdVisib, setAddAcmdVisib] = useState(false)
    const [spaceDescVisib, setSpaceDescVisib] = useState(false)
    const [cordenates, setCordenates] = useState({
        lat: -4.179914,
        lng: -38.129617
    })
    function handleBackButton() {
        navigate(-1)
        dispatch(showNav())
    }
    function handleToggleAcmdVisib() {
        setAddAcmdVisib(!AddAcmdVisib)
    }
    return (
        <>
            {!AddAcmdVisib ?
                <>
                    <header className="posiiton-relative">
                        <CaretLeft size={20} className="position-absolute mt-2 ms-2 text-dark" onClick={handleBackButton} />
                        <img src="https://www.meusonhar.com.br/wp-content/uploads/2016/11/casa-nova-sonhar-com.jpg" alt="" style={{ width: "100%" }} />
                    </header>
                    <main className={!spaceDescVisib ? "my-5" : "mt-5 scroll-lock"}>
                        <h1 className="ms-4 me-5 mb-5 fw-bolder">Abra suas portas para receber hóspedes</h1>
                        <h2 className="ms-4 me-5 mb-4 fw-bolder fs-3">Descubra quanto você pode ganhar como anfitrião</h2>
                        <section className="region-receipt p-4">
                            <div className="receipt-elem p-1 my-2 pt-3 rounded-3">
                                <p className="font-smaller text-secondary">Os anfitriões da sua região ganham em media</p>
                                <p className="fs-1 text-danger ms-2">R$2500<span className="fs-5">/mês</span></p>
                            </div>
                            <div className="receipts-container d-flex justify-content-evenly">
                                <div className="receipt-elem py-2 px-4 me-2 rounded-3">
                                    <p className="font-smaller text-secondary my-1">Eles ganham</p>
                                    <p className="receipt-value fw-bold">R$200<span className="font-smaller">/noite</span></p>
                                </div>
                                <div className="receipt-elem py-2 px-3 rounded-3">
                                    <p className="font-smaller text-secondary my-1">Eles tem reservas</p>
                                    <p className="receipt-value fw-bold">21 noites<span className="font-smaller">/mês</span></p>
                                </div>
                            </div>
                        </section>
                        <section className="space-desc container-fluid position-relative p-2">
                            <p className="ms-3 fw-bold">Descreva o seu espaço</p>
                            <button className=" border-0 rounded-5 px-5 position-absolute ms-4 bg-light" style={{ width: "80%" }} onClick={() => setSpaceDescVisib(!spaceDescVisib)}>
                                <span>
                                    <MagnifyingGlass size={20} className="text-danger position-absolute start-0 ms-2" />
                                    Digite sua localização</span>
                            </button>
                            {spaceDescVisib && <SpaceDesc setCordenates={setCordenates} setSpaceDescVisib={setSpaceDescVisib} />}
                            <div className="map-container" style={{ minHeight: '300px', marginTop:"65px" }}>
                                <GoogleMap
                                    mapContainerClassName="map"
                                    center={{
                                        lat: cordenates.lat,
                                        lng: cordenates.lng
                                    }}
                                    zoom={15}>
                                    <Marker position={{
                                        lat: cordenates.lat,
                                        lng: cordenates.lng
                                    }} />
                                </GoogleMap>
                            </div>
                        </section>
                        <section className="my-5">
                            <h2 className="mb-4 ms-3 fw-bold fs-3">Você pode hospedar onde quiser, quando quiser</h2>
                            <div className="anfitriao-resume-container d-flex">
                                <div className="anfitriao-resume d-flex flex-column align-items-center p-2">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuOKcRCySbtTZHLPP2FT8nvNHG25StGcdhw&usqp=CAU" alt="" className="rounded-3" style={{ height: "250px" }} />
                                    <p className="mt-4">Hospedar meu chalé me deu uma renda a mais e me possibilitou investir em novos projetos</p>
                                </div>
                                <div className="anfitriao-resume d-flex flex-column align-items-center p-2">
                                    <img src="https://storage.alboom.ninja/sites/2851/albuns/377747/foto_perfil_profissional_medico_consultorio_hospital_albert_einstein-1.jpg?t=1548277552" alt="" className="rounded-3" style={{ height: "250px", width: "190px" }} />
                                    <p className="mt-4">Compartilhar um quarto mudou minha vida, conheci pessoas novas tive experiências incriveis.</p>
                                </div>
                            </div>
                        </section>
                        <div className="bg-dark text-light mb-5 p-4 rounded-top d-flex flex-column justify-content-center" style={{ height: "250px" }}>
                            <h2 className="mb-4">Experimente ser anfitrião no mybnb</h2>
                            <p>Faça parte da comunidade. Ajudaremos você em cada etapa.</p>
                        </div>
                        <div className="acomodation-experience container-fluid p-2 position-fixed bottom-0 bg-light d-flex justify-content-center border-top border-secondary">
                            <button className="btn btn-danger me-2" onClick={handleToggleAcmdVisib}>Experimente Hospedar</button>
                        </div>
                    </main> </> : <AddAcomodation handleToggleAcmdVisib={handleToggleAcmdVisib} setAddAcmdVisib={setAddAcmdVisib} />}
        </>
    )
}