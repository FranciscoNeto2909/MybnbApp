import React from "react";
import { X, MinusCircle, PlusCircle, Image } from "phosphor-react";
import { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import AutocompleteElem from "./AutocompleteElem";
import SimpleCheckButon from "../buttons/SimpleCheckButton"

export default function AddAcomodation({ handleToggleAcmdVisib }) {
    const [hostsQuant, setHostsQuant] = useState(4)
    const [bedsQuant, setBedsQuant] = useState(1)
    const [bedroomsQuant, setBedroomsQuant] = useState(1)
    const [bethroomsQuant, setBethroomsQuant] = useState(1)
    const [step, setStep] = useState(1)
    const [desc, setDesc] = useState("")
    const [emphasis, setEmphasis] = useState("")
    const [price, setPrice] = useState(53)
    const [char, setChar] = useState(0)
    const [progress, setProgress] = useState(7.5)
    const [cordenates, setCordenates] = useState({
        lat: -4.179914,
        lng: -38.129617
    })
    const conveniences = ["piscina", "Churrasqueira", "jacuzzi", "patio", "fogueira", "Área de lazer"]
    const preferences = ["Wi-Fi", "Tv", "Cozinha", "maquina de lavar", "chuveiro eletrico", "Ar-condicionado"]
    const securityItems = ["Alarme", "extintor de incendio", "Detector de fumaças", "kit de primeiros socorros"]
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
        if (step < 12) {
            setStep(step + 1)
            setProgress(progress + 7.5)
        }
    }
    function handleBackStep() {
        if (step > 1) {
            setStep(step - 1)
            setProgress(progress - 7.5)
        }
    }
    function handleIncrease(func, elem) {
        if (elem === hostsQuant && hostsQuant < 16) {
            func(elem + 1)
        } else if (elem === bedsQuant && bedsQuant < 14) {
            func(elem + 1)
        } else if (elem === bedroomsQuant && bedroomsQuant < 8) {
            func(elem + 1)
        } else if (elem === bethroomsQuant && bethroomsQuant < 8) {
            func(elem + 1)
        }
    }
    function handleDecrease(func, elem) {
        if (elem === hostsQuant && hostsQuant > 1) {
            func(elem - 1)
        } else if (elem === bedsQuant && bedsQuant > 1) {
            func(elem - 1)
        } else if (elem === bedroomsQuant && bedroomsQuant > 1) {
            func(elem - 1)
        } else if (elem === bethroomsQuant && bethroomsQuant > 1) {
            func(elem - 1)
        }
    }

    function handleSelectEmphasis(value) {
        console.log(value)
        setEmphasis(value)
    }
    function handleChangeAcomodationDesc(e) {
        setDesc(e.target.value)
        if (e.keyCode !== 8 && char < 270) {
            setChar(char + 1)
        }
        else if (e.keyCode === 8 && char > 0) {
            setChar(char - 1)
        }
    }
    function handleChangePriceValue(operation) {
        if (operation === "addition" && price  < 5003) {
            setPrice(price +  10)
        } else if (operation === "subtration" && price  > 53 ) {
            setPrice(price - 10)
        }
    }
    // function handleShowImage(e) {
    //     const inputImg = document.querySelector("#img").files[0]
    //     const img = document.createElement('img')
    //     img.src = URL.createObjectURL(inputImg)
    //     document.querySelector(".thumbnail").appendChild(img)
    // }
    return (
        <div className="addAcomodation">
            <header className="addAcomodation-header py-5" style={{ height: "160px" }}>
                <X size={25} className="close-addAcmd-btn position-absolute top-0 ms-3 mt-3 rounded-5 p-1 text-light" onClick={handleToggleAcmdVisib} />
                <h1 className="AddAcomodation-tittle text-light fs-2 me-4 ms-4 mt-4">Em que tipo de espaço você vai hospedar?</h1>
                <nav className="position-fixed bottom-0 container d-flex justify-content-between p-2">
                    <progress className="position-absolute top-0" value={progress} max={100} style={{width:"100%", height:"6px"}}></progress>
                    <button className="bg-transparent border-0 text-decoration-underline fw-bold" onClick={handleBackStep}>Voltar</button>
                    <button className="btn btn-dark" onClick={handleNextStep}>{step === 12 ? "Revise seu anúncio" : "Avançar"}</button>
                </nav>
            </header>
            <main className="addAcomodation-main container rounded-top pt-3">
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
                    <div className="map-container" style={{ minHeight: '300px' }}>
                        <AutocompleteElem setCordenates={setCordenates} />
                        <GoogleMap
                            mapContainerClassName="map"
                            center={{
                                lat: cordenates.lat,
                                lng: cordenates.lng
                            }}
                            zoom={15}>
                            <Marker position={{
                                lat: cordenates.lat,
                                lng: cordenates.lng
                            }} />
                        </GoogleMap>
                    </div>
                }
                {step === 5 &&
                    <div className="hosts">
                        <div className="d-flex justify-content-between p-2 my-2 border rounded-3">
                            Hóspedes
                            <div className="buttons">
                                <MinusCircle className={hostsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={() => handleDecrease(setHostsQuant, hostsQuant)} />
                                {hostsQuant}
                                <PlusCircle className={hostsQuant === 16 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={() => handleIncrease(setHostsQuant, hostsQuant)} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between p-2 my-2 border rounded-3">
                            Camas
                            <div className="buttons">
                                <MinusCircle className={bedsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={() => handleDecrease(setBedsQuant, bedsQuant)} />
                                {bedsQuant}
                                <PlusCircle className={bedsQuant === 14 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={() => handleIncrease(setBedsQuant, bedsQuant)} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between p-2 my-2 border rounded-3">
                            Quartos
                            <div className="buttons">
                                <MinusCircle className={bedroomsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={() => handleDecrease(setBedroomsQuant, bedroomsQuant)} />
                                {bedroomsQuant}
                                <PlusCircle className={bedroomsQuant === 8 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={() => handleIncrease(setBedroomsQuant, bedroomsQuant)} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between p-2 my-2 border rounded-3">
                            Banheiros
                            <div className="buttons">
                                <MinusCircle className={bethroomsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={() => handleDecrease(setBethroomsQuant, bethroomsQuant)} />
                                {bethroomsQuant}
                                <PlusCircle className={bethroomsQuant === 8 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={() => handleIncrease(setBethroomsQuant, bethroomsQuant)} />
                            </div>
                        </div>
                    </div>
                }
                {step === 6 &&
                    <div className="conveniences-container mb-5">
                        <h2 className="fs-4 fw-bold">Você tem alguma comodidate que mereça destaque ?</h2>
                        <div className="conveniences container d-flex flex-wrap justify-content-evenly my-3">
                            {conveniences.map((conv, i) =>
                                <button key={i} className="conv-items my-2" onClick={e => e.target.classList.toggle("selected")}>{conv}</button>)}
                        </div>
                        <h2 className="fs-4 fw-bold">E estes favoritos dos hospedes ?</h2>
                        <div className="preferences container d-flex flex-wrap justify-content-evenly my-3">
                            {preferences.map((pref, i) =>
                                <button key={i} className="pref-items my-2" onClick={e => e.target.classList.toggle("selected")}>{pref}</button>)}
                        </div>
                        <h2 className="fs-4 fw-bold">Tem algum desses itens de segurança?</h2>
                        <div className="security-items container d-flex flex-wrap justify-content-evenly my-3">
                            {securityItems.map((secItem, i) =>
                                <button key={i} className="sec-items my-2" onClick={e => e.target.classList.toggle("selected")}>{secItem}</button>)}
                        </div>
                    </div>
                }
                {step === 7 &&
                    <div className="images-container">
                        <img src="" alt="" />
                        <h2 className="fs-4">Agora vamos adicionar algumas fotos</h2>
                        <label htmlFor="img" className="font-smaller img-container py-5 rounded-2 text-center mt-5 d-flex flex-column align-items-center">
                            <Image size={40} />
                            Escolha pelo menos 5 imagens
                            <input type="file" accept="image/*" className="imgs-input d-none" id="img" multiple />
                        </label>
                    </div>
                }
                {step === 8 &&
                    <div className="anucio-title-container container-fluid d-flex flex-column">
                        <p>O titulo do seu anúncio deve destacar o que há de especial na acomodação.</p>
                        <input type="text" id="" placeholder="Casa do lago" className="anuncio-title p-3" />
                    </div>
                }
                {step === 9 &&
                    <div className="destaques-container container">
                        <h2 className="fs-4 fw-bold mt-4 mb-3">Escolha o destaque de sua acomodação</h2>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={() => handleSelectEmphasis("Praia")}>
                            <img src="https://prints.ultracoloringpages.com/841d46dcc996365d7654b4e4fa5a1350.png" alt="" className="types-item-img" />
                            <span className="ms-2 fw-bold">Praia</span>
                        </button>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={() => handleSelectEmphasis("Piscinas incriveis")}>
                            <img src="https://prints.ultracoloringpages.com/733be6c3fa243f757ec78ac738437c6b.png" alt="" className="types-item-img" />
                            <span className="ms-2 fw-bold">Piscinas incriveis</span>
                        </button>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={() => handleSelectEmphasis("Ilhas")}>
                            <img src="https://www.colorironline.com/images/imgcolor/desenho-ilha-deserta-2-para-colorir.jpg" alt="" className="types-item-img" />
                            <span className="ms-2 fw-bold">Ilhas</span>
                        </button>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={e => handleSelectEmphasis(e)}>
                            <img src="https://cdn-icons-png.flaticon.com/512/250/250330.png" alt="" className="types-item-img" />
                            <span className="ms-2 fw-bold">Surf</span>
                        </button>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={() => handleSelectEmphasis("Parques nacionais")}>
                            <img src="https://storyateverycorner.com/wp-content/uploads/2021/01/national-park-icon.png" alt="" className="types-item-img" />
                            <span className="ms-2 fw-bold">Parques nacionais</span>
                        </button>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={() => handleSelectEmphasis("Tropical")}>
                            <img src="https://prints.ultracoloringpages.com/d61819753059d96901b3e4ea7a2c00ca.png" alt="" className="types-item-img" />
                            <span className="ms-2 fw-bold">Tropical</span>
                        </button>
                    </div>
                }
                {step === 10 &&
                    <div className="description-container d-flex flex-column">
                        <h2 className="fs-4 fw-bold">Nos fale um pouco sobre sua comodação</h2>
                        <textarea id="" cols="30" rows="10" placeholder="Você vai se divertir muito neste local" className="acomodation-desc p-2 mx-auto" maxLength="270" onKeyDown={e => handleChangeAcomodationDesc(e)}></textarea>
                        <span className="ms-5 mt-2 text-secondary">{char}/270</span>
                    </div>
                }
                {step === 11 &&
                    <div>
                        <h2>vamos definir seu preço</h2>
                        <div className="price-container mt-5 d-flex align-items-center justify-content-center">
                            <MinusCircle size={40} className={price === 0 && "text-secondary"} onClick={() => handleChangePriceValue("subtration")} />
                            <span className="fs-3 mx-3 border py-3 rounded px-5">R${price}</span>
                            <PlusCircle size={40} className="" onClick={() => handleChangePriceValue("addition")} />
                        </div>
                        <p className="text-center my-2">Por noite</p>
                        <p className="m-5">Lembre-se que os preços de lugares como o seu geralmente variam de R$100 a R$300.</p>
                        <SimpleCheckButon text={"Ofereça um desconto de 20% aos três primeiros hóspedes para conseguir reservas o quanto antes."}/>
                    </div>
                }
                {step === 12 && 
                    <div className="security-items container-fluid d-flex flex-column">
                        <h2 className="mt-5 mb-3">Sua acomodação tem algumas dessa opções?</h2>
                        <SimpleCheckButon text={"Câmera(s) de segurança"} />
                        <SimpleCheckButon text={"Armas"} />
                        <SimpleCheckButon text={"Animais perigosos"} />
                        <h2 className="mt-5">O que é importante saber</h2>
                        <p>Ressalto que essa aplicação é apenas para peaticar programação web e não tem nenhum intuito comercial ou finançeiro.</p>
                    </div>
                }
            </main>
        </div>
    )
}