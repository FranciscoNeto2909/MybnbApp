import { useState } from "react";
import { CaretLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import OffersAndNews from "./OffersAndNews";
import AccountNotifications from "./AccountNotifications";
export default function Notification() {
    const navigate = useNavigate()
    const [toggleClass, setToggleClass] = useState(true)
    const [elemVisib, setElementVisib] = useState(false)
    function handleToggleClass() {
        setToggleClass(!toggleClass)
    }
    function handleToggleElement() {
        handleToggleClass()
        setElementVisib(!elemVisib)
    }
    return (
        <>
            <header className="account-header py-3 position-sticky top-0 bg-light mb-5">
                <CaretLeft size={25} onClick={() => navigate(-1)} />
            </header>
            <main className="p-3">
                <h1 className="fw-bold fs-3">Notificações</h1>
                <div className="notification-nav  mb-4 bottom-border">
                    <button
                        className={toggleClass ? "font-smaller py-2 offers-btn bg-transparent fw-bold border-bt" : "font-smaller py-2 offers-btn bg-transparent fw-bold text-secondary"}
                        onClick={handleToggleElement}>
                        ofertas e novidades
                    </button>

                    <button
                        className={toggleClass ? "font-smaller py-2 account-btn bg-transparent fw-bold text-secondary" : "font-smaller py-2 account-btn bg-transparent fw-bold border-bt"}
                        onClick={handleToggleElement}>
                        Conta
                    </button>
                </div>
                <section>
                    {elemVisib ? <AccountNotifications/> : <OffersAndNews/>}
                </section>
            </main>
        </>
    )
}