import React,{ useState } from "react"
import { mask } from "remask"

export default function NumberAuth({ handleBackStep, handleNextStep, code }) {
    const [writedCode, setWritedCode] = useState("")
    const [wrong, setWrong] = useState(false)

    function handleConfirmCode() {
        if (writedCode.toString() !== code) {
            setWrong(true)

            setTimeout(() => {
                setWrong(false)
            }, 2000);

        } else {
            handleNextStep()
        }
    }

    function handleMaskCode(elem) {
        setWritedCode(mask(`${elem}`, ['999999']))
    }

    return (
        <div className="numAuth-container">
            <header className="numAuth-header container-fluid mt-2 position-relative d-flex align-items-center justify-content-center">
                <button className="fw-bold fs-4 position-absolute start-0 m-2 border-0 bg-transparent" onClick={handleBackStep}>&lt;</button>
                <h1 className="text-center fs-5">Confirme seu número</h1>
            </header>
            <main className="mt-5 px-2 container d-flex flex-column">
                <p>Digite o código enviado para seu endereço de email</p>
                <input type="text" aria-label="Código inserido: "
                    className={wrong ? "code-input col-6 py-2 inpt-error lbl-error rounded-3 mx-auto text-center fs-2" :
                        "code-input col-6 py-2 border-2 border-dark rounded-3 mx-auto text-center fs-2"
                    } maxLength={6} placeholder="- - - - - -" value={writedCode} onChange={e => handleMaskCode(e.target.value)} />
                {wrong && <p className="font-smaller lbl-error text-center">Codigo incorreto</p>}
                <p className="mt-4 mx-auto">Não recebeu o código? <span><a href="" className="text-dark">Mais opções</a></span></p>
                <button className="btn btn-dark my-4 col-10 mx-auto" onClick={handleConfirmCode}>Continuar</button>
                <a href="" className="text-dark mt-5 mx-auto">Precisa de ajuda?</a>
            </main>
        </div>
    )
}