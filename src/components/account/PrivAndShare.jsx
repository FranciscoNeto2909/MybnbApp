import { CaretLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AccountData from "./AccountData";
import AccountShare from "./AccountShare";
import AccountServices from "./AccountServices";

export default function PrivAndShare() {
    const navigate = useNavigate()
    const [dataVisib, setDataVisib] = useState(true)
    const [shareVisib, setShareVisib] = useState(false)
    const [servicesVisib, setServicesVisib] = useState(false)

    function HandleToggleData() {
        setDataVisib(true)
        setShareVisib(false)
        setServicesVisib(false)
    }
    function HandleToggleShare() {
        setDataVisib(false)
        setShareVisib(true)
        setServicesVisib(false)
    }
    function HandleToggleServices() {
        setDataVisib(false)
        setShareVisib(false)
        setServicesVisib(true)
    }
    return (
        <div>
            <header className="account-header py-3 position-sticky top-0 bg-light mb-5">
                <CaretLeft size={25} onClick={() => navigate(-1)} />
            </header>
            <div className="titleAndNav p-2">
                <h1 className="fs-2 fw-bold">Privacidade e compartilhamento</h1>
                <nav className="privAndShare-nav d-flex justify-content-evenly mb-4 bottom-border">
                    <button
                        className={dataVisib ? "font-smaller py-2 offers-btn bg-transparent fw-bold border-bt" : "font-smaller py-2 offers-btn bg-transparent fw-bold text-secondary"}
                        onClick={HandleToggleData}>
                        Dados
                    </button>
                    <button
                        className={shareVisib ? "font-smaller py-2 account-btn bg-transparent fw-bold border-bt" : "font-smaller py-2 account-btn bg-transparent fw-bold text-secondary"}
                        onClick={HandleToggleShare}>
                        Compartilhamento
                    </button>
                    <button
                        className={servicesVisib ? "font-smaller py-2 account-btn bg-transparent fw-bold border-bt" : "font-smaller py-2 account-btn bg-transparent fw-bold text-secondary"}
                        onClick={HandleToggleServices}>
                        serviços
                    </button>
                </nav>
            </div>
            <main className="p-2">
                {
                    dataVisib && <AccountData />
                }
                {
                    shareVisib && <AccountShare />
                }
                {
                    servicesVisib && <AccountServices />
                }
            </main>
        </div>
    )
}