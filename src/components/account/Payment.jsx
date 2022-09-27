import { CaretLeft, CaretRight } from "phosphor-react"
import { useNavigate } from "react-router-dom"

export default function Payment() {
    const navigate = useNavigate()
    return (
        <>
            <header className="account-header py-3 position-sticky top-0 bg-light mb-5">
                <CaretLeft size={25} onClick={() => navigate(-1)} />
            </header>
            <main>
                <h1 className="text-center fs-3 fw-bold">Pagamentos e recebimentos</h1>
                <div className="payment-container d-flex flex-column p-3">
                    <button className="bottom-border py-4 my-2 text-start position-relative bg-transparent">Formas de pagamentos
                        <CaretRight size={25} className="position-absolute end-0 top-50 translate-middle" />
                    </button>
                    <button className="bottom-border py-4 my-2 text-start position-relative bg-transparent">Formas de receber pagamentos
                        <CaretRight size={25} className="position-absolute end-0 top-50 translate-middle" />
                    </button>
                    <button className="bottom-border py-4 my-2 text-start position-relative bg-transparent">Informações fiscais
                        <CaretRight size={25} className="position-absolute end-0 top-50 translate-middle" />
                    </button>
                </div>
            </main>
        </>
    )
}