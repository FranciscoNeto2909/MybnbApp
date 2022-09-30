import { CaretLeft, MagnifyingGlass } from "phosphor-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showNav } from "../assets/appSlice";
export default function AcomodationHost() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleBackButton() {
        navigate(-1)
        dispatch(showNav())
    }
    return (
        <>
            <header className="posiiton-relative">
                <CaretLeft size={20} className="position-absolute mt-2 ms-2 text-dark" onClick={handleBackButton}/>
                <img src="https://www.meusonhar.com.br/wp-content/uploads/2016/11/casa-nova-sonhar-com.jpg" alt="" style={{width:"100vw"}} />
            </header>
            <main className="mt-5">
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
                    <button className=" border-0 rounded-5 px-5 position-absolute ms-4 mt-2 bg-light" style={{ width: "80%" }}>
                        <span>
                            <MagnifyingGlass size={20} className="text-danger position-absolute start-0 ms-2" />
                            Beberibe</span>
                    </button>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31834.12237109596!2d-38.14479012723916!3d-4.168168852770807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b88e0b58561925%3A0xd03dac14ccee1cc4!2sBeberibe%2C%20CE%2C%2062840-000!5e0!3m2!1spt-BR!2sbr!4v1664545325168!5m2!1spt-BR!2sbr" width="100%" height="300" style={{border:0}} allowfFllScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </section>
                <div className="acomodation-experience container-fluid p-2 position-fixed bottom-0 bg-light d-flex justify-content-center border-top border-secondary">
                    <button className="btn btn-danger me-2">Experimente Hospedar</button>
                </div>
            </main>
        </>
    )
}