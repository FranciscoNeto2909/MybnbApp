import React from "react";
import { X } from "phosphor-react";
import { useState } from "react";

export default function AddAcomodation({ handleToggleAcmdVisib }) {
    
    const [step, setStep] = useState(1)
    const spaceType = ["Apartamento", "Casa", "Unidade-secundária", "Acomodação única", "Pousada", "Hotel botique"]
    const spaceTypesDesc = [
        {
            space: "Casa",
            desc: "Uma casa que pode ser independente ou ter paredes compartilhadas."
        },
        {
            space: "Cabana",
            desc: "Uma casa feita com materiais naturais, como madeira, e construída em meio à natureza."
        },
        {
            space: "Vila",
            desc: "Uma casa de luxo que pode ter espaços interiores e exteriores, jardins e piscinas."
        },
        {
            space: "Townhouse",
            desc: "Uma casa geminada ou com mais de um nível que compartilha paredes e, possivelmente, espaços ao ar livre."
        },
        {
            space: "Casa de campo",
            desc: "Uma casa acolhedora construída em uma área rural ou perto de um lago ou praia."
        },
        {
            space: "Casa de veraneio",
            desc: "Uma propriedade de aluguel mobiliada que inclui uma cozinha e banheiros e pode ofercer alguns serviços aos hóspedes, como recepção."
        },
        {
            space: "Casebre",
            desc: "Uma casa de madeira ou barro que pode ter um telado de palha."
        },
        {
            space: "Chalé",
            desc: "Uma casa de madeira com um telado inclinado popular para viagens de esqui ou estadias de verão."
        }
    ]
    const placeType = ["Lugar inteiro", "Um quarto inteiro", "Um quarto compartilhado"]
    function handleNextStep() {
        if (step < 4) {
            setStep(step + 1)
        }
    }
    function handleBackStep() {
        if (step > 1) {
            setStep(step - 1)
        }
    }
    return (
        <div className="addAcomodation">
            <header className="addAcomodation-header py-5" style={{ height: "160px" }}>
                <X size={25} className="close-addAcmd-btn position-absolute top-0 m-2 rounded-5 p-1 text-light" onClick={handleToggleAcmdVisib} />
                <h1 className="AddAcomodation-tittle text-light fs-2 me-4 ms-4 mt-4">Em que tipo de espaço você vai hospedar?</h1>
                <nav className="position-fixed bottom-0 container d-flex justify-content-between p-2">
                    <button className="bg-transparent border-0 text-decoration-underline fw-bold" onClick={handleBackStep}>Voltar</button>
                    <button className="btn btn-dark" onClick={handleNextStep}>Avançar</button>
                </nav>
            </header>
            <main className="addAcomodation-main rounded-top pt-3">
                {step === 1 &&
                    <div className="space-types-container d-flex flex-column">
                        {spaceType.map((type, i) => <button key={i} className="space-types p-2 m-3 rounded-3 bg-transparent">{type}</button>)}
                    </div>
                }
                {step == 2 &&
                    <div className="space-types-desc-container mb-5">
                        {spaceTypesDesc.map((space, i) =>
                            <button key={i} className="space-types p-2 m-3 rounded-3 bg-transparent ">
                                <h2 className="fs-4">{space.space}</h2>
                                <p>{space.desc}</p>
                            </button>)
                        }
                    </div>
                }
                {step === 3 &&
                    <div className="space-types-container d-flex flex-column">
                        {placeType.map((place, i) => <button key={i} className="space-types p-2 m-3 rounded-3 bg-transparent">{place}</button>)}
                    </div>
                }
                {step === 4 &&
                    <div className="map">
                        <p>Mapa</p>
                    </div>
                }
            </main>
        </div>
    )
}