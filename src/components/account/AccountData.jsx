import { CaretRight } from "phosphor-react"
export default function AccountData() {
    return (
        <>
            <h2 className="fs-3 fw-bold">
                Gerencie os dados da sua conta
            </h2>
            <p className="text-secondary">
                Você pode pedir para baixar ou excluir seus dados pessoais do Mybnb
            </p>
            <button className="bottom-border py-4 text-start position-relative bg-transparent">
                <span className="d-block fs-5 mb-2">Solicite seus dados pessoais</span>
                <span className="font-smaller text-secondary">Criamos um arquivo para você baixar seus dados pessoais</span>
                <CaretRight size={25} className="position-absolute end-0 top-0 mt-5 translate-middle" />
            </button>  <button className="bottom-border py-4 text-start position-relative bg-transparent">
                <span className="d-block fs-5 mb-2">Excluir sua conta</span>
                <span className="font-smaller text-secondary">Isso excluirá sua conta e dados de forma permanente, de acordo com a lei</span>
                <CaretRight size={25} className="position-absolute end-0 top-0 mt-5 translate-middle" />
            </button>
        </>
    )
}