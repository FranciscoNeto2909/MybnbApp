import { useState } from "react";
import SwitchButton from "../buttons/SwitchButton";

export default function AccountNotifications() {
    const [activitiVisib, setActivitiVisib] = useState(false)
    const [guestVisib, setGuestVisib] = useState(false)
    const [reminderVisib, setReminderVisib] = useState(false)
    const [messagesVisib, setMessagesVisib] = useState(false)

    return (
        <>
            <section className="politicyActivity mb-5 bottom-border">
                <h2 className="fw-bold fs-4">Atividades e políticas da conta</h2>
                <p className="font-smaller text-secondary">Confirme as atividades das suas reservas e da sua conta e conheça políticas importantes do Mybnb.</p>
                <div className="offersAndNews-buttons mt-4">
                    <div className="personalInfo-name-container  position-relative py-2 my-2">
                        <h3 className="fs-6 fw-bold">Atividades da conta</h3>
                        {activitiVisib ?
                            <p className="font-smaller text-secondary">Acomodações, experiencias e ofertas inspiradoras.</p> :
                            <p className="font-smaller text-secondary">Desativado</p>
                        }
                        {activitiVisib &&
                            <>
                                <SwitchButton text={"Email"} />
                                <SwitchButton text={"SMS"} />
                                <SwitchButton text={"Notificações do navegador"} text2={"A notificações de push estão desativadas. para habilitar este recurso, ative as notificações"} />

                            </>
                        }
                        <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={e => setActivitiVisib(!activitiVisib)}>{activitiVisib ? "Cancelar" : "Editar"}</button>
                    </div>
                    <div className="personalInfo-name-container  position-relative py-2 my-2">
                        <h3 className="fs-6 fw-bold">Políticas do hóspede</h3>
                        {guestVisib ?
                            <p className="font-smaller text-secondary">Recomendações personalizadas para sua viagem.</p> :
                            <p className="font-smaller text-secondary">Desativado</p>
                        }
                        {guestVisib &&
                            <>
                                <SwitchButton text={"Email"} />
                                <SwitchButton text={"SMS"} />
                                <SwitchButton text={"Notificações do navegador"} text2={"A notificações de push estão desativadas. para habilitar este recurso, ative as notificações"} />

                            </>
                        }
                        <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={e => setGuestVisib(!guestVisib)}>{guestVisib ? "Cancelar" : "Editar"}</button>
                    </div>
                </div>
            </section>
            <section className="reminders mb-5 bottom-border">
                <h2 className="fw-bold fs-4">Lembretes</h2>
                <p className="font-smaller text-secondary">Receba lembretes importantes sobre suas reservas, anúncios e atividades da sua conta.</p>
                <div className="offersAndNews-buttons mt-4">
                    <div className="personalInfo-name-container  position-relative py-2 my-2">
                        <h3 className="fs-6 fw-bold">Lembretes</h3>
                        {reminderVisib ?
                            <p className="font-smaller text-secondary">Nunca perca lembretes importantes sobre suas reservas e atividades da conta.</p> :
                            <p className="font-smaller text-secondary">Desativado</p>
                        }
                        {reminderVisib &&
                            <>
                                <SwitchButton text={"Email"} />
                                <SwitchButton text={"SMS"} />
                                <SwitchButton text={"Notificações do navegador"} text2={"A notificações de push estão desativadas. para habilitar este recurso, ative as notificações"} />

                            </>
                        }
                        <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={e => setReminderVisib(!reminderVisib)}>{reminderVisib ? "Cancelar" : "Editar"}</button>
                    </div>
                </div>
            </section>
            <section className="messages">
                <h2 className="fw-bold fs-4">Mensagens de hóspedes e anfitriões</h2>
                <p className="font-smaller text-secondary">Mantenha contato com seu anfitrião ou hóspedes antes e durante sua viagem.</p>
                <div className="offersAndNews-buttons mt-4">
                    <div className="personalInfo-name-container  position-relative py-2 my-2">
                        <h3 className="fs-6 fw-bold">Mensagens</h3>
                        {messagesVisib ?
                            <p className="font-smaller text-secondary">Nunca perca mensagens importantes de seus anfitriões ou hóspedes.</p> :
                            <p className="font-smaller text-secondary">Desativado</p>
                        }
                        {messagesVisib &&
                            <>
                                <SwitchButton text={"Email"} />
                                <SwitchButton text={"SMS"} />
                                <SwitchButton text={"Notificações do navegador"} text2={"A notificações de push estão desativadas. para habilitar este recurso, ative as notificações"} />

                            </>
                        }
                        <button className="position-absolute top-0 end-0 border-0 bg-transparent text-decoration-underline" onClick={e => setMessagesVisib(!messagesVisib)}>{messagesVisib ? "Cancelar" : "Editar"}</button>
                    </div>
                </div>
            </section>
        </>
    )
}