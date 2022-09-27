import { useState } from "react";
import SimpleCheckButton from "../aplication/SimpleCheckButton"
import SwitchButton from "../aplication/SwitchButton";

export default function OfersAndNews() {
    const [offersVisib, setOffersVisib] = useState(false)
    const [planningVisib, setPlanningVisib] = useState(false)
    const [noticesVisib, setNoticesVisib] = useState(false)
    const [feedbackVisib, setFeedbackVisib] = useState(false)
    const [travelRegulVisib, setTravelRegulVisib] = useState(false)

    return (
        <>
            <section className="offersAndNews mb-5 bottom-border">
                <h2 className="fw-bold fs-4">Dicas e ofertas de viagem</h2>
                <p className="font-smaller text-secondary">Inspire-se para sua proxima viagem com recomendações personalizadas e ofertas especiais.</p>
                <div className="offersAndNews-buttons mt-4">
                    <div className="personalInfo-name-container  position-relative py-2 my-2">
                        <h3 className="fs-6 fw-bold">Inspiração e ofertas</h3>
                        {offersVisib ?
                            <p className="font-smaller text-secondary">Acomodações, experiencias e ofertas inspiradoras.</p> :
                            <p className="font-smaller text-secondary">Desativado</p>
                        }
                        {offersVisib &&
                            <>
                                <SwitchButton text={"Email"} />
                                <SwitchButton text={"SMS"} />
                                <SwitchButton text={"Notificações do navegador"} text2={"A notificações de push estão desativadas. para habilitar este recurso, ative as notificações"} />

                            </>
                        }
                        <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={e => setOffersVisib(!offersVisib)}>{offersVisib ? "Cancelar" : "Editar"}</button>
                    </div>
                    <div className="personalInfo-name-container  position-relative py-2 my-2">
                        <h3 className="fs-6 fw-bold">Planejamento de viagens</h3>
                        {planningVisib ?
                            <p className="font-smaller text-secondary">Recomendações personalizadas para sua viagem.</p> :
                            <p className="font-smaller text-secondary">Desativado</p>
                        }
                        {planningVisib &&
                            <>
                                <SwitchButton text={"Email"} />
                                <SwitchButton text={"SMS"} />
                                <SwitchButton text={"Notificações do navegador"} text2={"A notificações de push estão desativadas. para habilitar este recurso, ative as notificações"} />

                            </>
                        }
                        <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={e => setPlanningVisib(!planningVisib)}>{planningVisib ? "Cancelar" : "Editar"}</button>
                    </div>
                </div>
            </section>
            <section className="mybnbNews bottom-border">
                <h3 className="fs-3 fw-bold">Novidades do Mybnb</h3>
                <p className="font-smaller text-secondary">Fique por dentro de todas as nossas novidades.</p>
                <div className="mybnbNews-buttons mt-4">
                    <div className="personalInfo-name-container  position-relative py-2 my-2">
                        <h3 className="fs-6 fw-bold">Notícias e programas</h3>
                        {noticesVisib ?
                            <p className="font-smaller text-secondary">Fique por dentro dos novos programas e comunicados.</p> :
                            <p className="font-smaller text-secondary">Desativado</p>
                        }
                        {noticesVisib &&
                            <>
                                <SwitchButton text={"Email"} />
                                <SwitchButton text={"SMS"} />
                                <SwitchButton text={"Notificações do navegador"} text2={"A notificações de push estão desativadas. para habilitar este recurso, ative as notificações"} />

                            </>
                        }
                        <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={e => setNoticesVisib(!noticesVisib)}>{noticesVisib ? "Cancelar" : "Editar"}</button>
                    </div>
                    <div className="personalInfo-name-container  position-relative py-2 my-2">
                        <h3 className="fs-6 fw-bold">Feedback</h3>
                        {feedbackVisib ?
                            <p className="font-smaller text-secondary">Queremos saber o que você está achando e como podemos melhorar.</p> :
                            <p className="font-smaller text-secondary">Desativado</p>
                        }
                        {feedbackVisib &&
                            <>
                                <SwitchButton text={"Email"} />
                                <SwitchButton text={"SMS"} />
                                <SwitchButton text={"Notificações do navegador"} text2={"A notificações de push estão desativadas. para habilitar este recurso, ative as notificações"} />

                            </>
                        }
                        <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={e => setFeedbackVisib(!feedbackVisib)}>{feedbackVisib ? "Cancelar" : "Editar"}</button>
                    </div>
                    <div className="personalInfo-name-container  position-relative py-2 my-2">
                        <h3 className="fs-6 fw-bold">Regulamento de viagens</h3>
                        {travelRegulVisib ?
                            <p className="font-smaller text-secondary">Viaje de forma inteligente ao conhecer as novidades dos regulamentos.</p> :
                            <p className="font-smaller text-secondary">Desativado</p>
                        }
                        {travelRegulVisib &&
                            <>
                                <SwitchButton text={"Email"} />
                                <SwitchButton text={"SMS"} />
                                <SwitchButton text={"Notificações do navegador"} text2={"A notificações de push estão desativadas. para habilitar este recurso, ative as notificações"} />

                            </>
                        }
                        <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={e => setTravelRegulVisib(!travelRegulVisib)}>{travelRegulVisib ? "Cancelar" : "Editar"}</button>
                    </div>
                </div>
                <div className="container checkbtn-container my-4">
                    <SimpleCheckButton text={"Cancelar inscrição de todos os emails de marketing"} func="" />
                </div>
            </section>
        </>
    )
}