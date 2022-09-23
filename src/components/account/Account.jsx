import { CaretLeft, CaretRight } from "phosphor-react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { showNav } from "../../assets/appSlice"
export default function Account() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleBackButton() {
        navigate(-1)
        dispatch(showNav())
    }
    return (
        <>
            <header className="account-header py-3 position-sticky top-0 bg-light">
                <CaretLeft size={30} onClick={handleBackButton}/>
            </header>
            <main className="account-main d-flex flex-column p-2">
                <h1 className=" fs-3 fw-bold">Conta</h1>
                <button className="payment-contayner border-0 border-bottom border-secondary py-4 text-start position-relative bg-transparent">
                    <span className="d-block fs-5 mb-2">Pagamento</span>
                    <span className="text-secondary">Cartão de créditos, cupons e muito mais</span>
                    <CaretRight size={30} className="position-absolute end-0 top-50 translate-middle" />
                </button>
                <button className="notify-contayner border-0 border-bottom border-secondary py-4 text-start position-relative bg-transparent">
                    <span className="d-block fs-5 mb-2">Notificações</span>
                    <span className="text-secondary">Como entramos em contato com você</span>
                    <CaretRight size={30} className="position-absolute end-0 top-50 translate-middle" />
                </button>
                <button className="login-contayner border-0 border-bottom border-secondary py-4 text-start position-relative bg-transparent" onClick={() => navigate("/profile/account/login-and-security")}>
                    <span className="d-block fs-5 mb-2">Login e segurança</span>
                    <span className="text-secondary">Senha e histórico de login</span>
                    <CaretRight size={30} className="position-absolute end-0 top-50 translate-middle"/>
                </button>
                <button className="preferer-contayner border-0 border-bottom border-secondary py-4 text-start position-relative bg-transparent">
                    <span className="d-block fs-5 mb-2">Preferências globais</span>
                    <span className="text-secondary">Idioma, moeda e fuso horário padrao</span>
                    <CaretRight size={30} className="position-absolute end-0 top-50 translate-middle"/>
                </button>
                <button className="privac-contayner border-0 border-bottom border-secondary py-4 text-start position-relative bg-transparent">
                    <span className="d-block fs-5 mb-2">Privacidade e compartilhamento</span>
                    <span className="text-secondary">Aplicativos conectados e configurações de compartilhamento</span>
                    <CaretRight size={30} className="position-absolute end-0 top-50 translate-middle"/>
                </button>
                <button className="workTravel-contayner border-0 border-bottom border-secondary py-4 text-start position-relative bg-transparent">
                    <span className="d-block fs-5 mb-2">Viagem a trabalho</span>
                    <span className="text-secondary">Adicione um email profissional para ter os benefícios da viagem a trabalho</span>
                    <CaretRight size={30} className="position-absolute end-0 top-50 translate-middle"/>
                </button>
                <button className="tools-contayner border-0 py-4 text-start position-relative bg-transparent">
                    <span className="d-block fs-5 mb-2">Ferramentas de hospedagem profissional</span>
                    <span className="text-secondary">Tenha acesso as feramentas profissionais caso gerencie várias propriedades</span>
                    <CaretRight size={30} className="position-absolute end-0 top-50 translate-middle"/>
                </button>
            </main>
        </>
    )
}