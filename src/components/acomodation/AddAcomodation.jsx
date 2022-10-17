import React, { useState } from "react";
import { X, MinusCircle, PlusCircle, Image } from "phosphor-react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import AutocompleteElem from "./AutocompleteElem";
import SimpleCheckButon from "../buttons/SimpleCheckButton"

export default function AddAcomodation({ handleToggleAcmdVisib }) {
    const [step, setStep] = useState(1)
    const [char, setChar] = useState(0)
    const [acomodation, setAcomodation] = useState({
        hostSpace: "",
        hostSpaceDesc: "",
        hostPlace: "",
        hostLocalization: "",
        hostsQuant: 4,
        bedsQuant: 1,
        bedroomsQuant: 1,
        bethroomsQuant: 1,
        confort: [],
        preferences: [],
        securityItems: [],
        images: [],
        title: "",
        hostEmphasis:"",
        hostDesc: "",
        price: 53,
        hostOptions: []
    })
    const [progress, setProgress] = useState(7.5)
    const [cordenates, setCordenates] = useState({
        lat: -4.179914,
        lng: -38.129617
    })
    const confort = ["piscina", "Churrasqueira", "jacuzzi", "patio", "fogueira", "Área de lazer"]
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
        if (step < 13) {
            setStep(step + 1)
            setProgress(progress + 7.5)
            if (step === 12) {
                console.log(acomodation)
            }
        }
    }
    function handleBackStep() {
        if (step > 1) {
            setStep(step - 1)
            setProgress(progress - 7.5)
        }
    }
    function handleIncreaseHostsQuant() {
        acomodation.hostsQuant < 16 && setAcomodation({ ...acomodation, hostsQuant: acomodation.hostsQuant + 1 })
    }
    function handleDecreaseHostsQuant() {
        acomodation.hostsQuant > 1 && setAcomodation({ ...acomodation, hostsQuant: acomodation.hostsQuant - 1 })
    }
    function handleIncreaseBedsQuant() {
        acomodation.bedsQuant < 12 && setAcomodation({ ...acomodation, bedsQuant: acomodation.bedsQuant + 1 })
    }
    function handleDecreaseBedsQuant() {
        acomodation.bedsQuant > 1 && setAcomodation({ ...acomodation, bedsQuant: acomodation.bedsQuant - 1 })
    }
    function handleIncreaseBedroomsQuant() {
        acomodation.bedroomsQuant < 8 && setAcomodation({ ...acomodation, bedroomsQuant: acomodation.bedroomsQuant + 1 })
    }
    function handleDecreaseBedromsQuant() {
        acomodation.bedroomsQuant > 1 && setAcomodation({ ...acomodation, bedroomsQuant: acomodation.bedroomsQuant - 1 })
    }
    function handleIncreaseBethroomsQuant() {
        acomodation.bethroomsQuant < 8 && setAcomodation({ ...acomodation, bethroomsQuant: acomodation.bethroomsQuant + 1 })
    }
    function handleDecreaseBethromsQuant() {
        acomodation.bethroomsQuant > 1 && setAcomodation({ ...acomodation, bethroomsQuant: acomodation.bethroomsQuant - 1 })
    }
    function handleSetConfortItems(e) {
        const conf = e.target.value
        e.target.classList.toggle("selected")
        if (acomodation.confort.includes(conf)) {
            setAcomodation({ ...acomodation, confort: acomodation.confort.filter(elem => elem !== conf) })
        }
        else if (!acomodation.confort.includes(conf)) {
            acomodation.confort.push(conf)
        }
    }
    function handleSetPreferenceItems(e) {
        e.target.classList.toggle("selected")
        const pref = e.target.value
        if (acomodation.preferences.includes(pref)) {
            setAcomodation({ ...acomodation, preferences: acomodation.preferences.filter(elem => elem !== pref) })
        }
        else if (!acomodation.preferences.includes(pref)) {
            acomodation.preferences.push(pref)
        }
    }
    function handleSetSecurityItems(e) {
        e.target.classList.toggle("selected")
        const secItem = e.target.value
        if (acomodation.securityItems.includes(secItem)) {
            setAcomodation({ ...acomodation, securityItems: acomodation.securityItems.filter(elem => elem !== secItem) })
        }
        else if (!acomodation.securityItems.includes(secItem)) {
            acomodation.securityItems.push(secItem)
        }
    }
    function handleChangeAcomodationDesc(e) {
        setAcomodation({...acomodation, hostDesc:e.target.value})
        if (e.keyCode !== 8 && char < 270) {
            setChar(char + 1)
        }
        else if (e.keyCode === 8 && char > 0) {
            setChar(char - 1)
        }
    }
    function handleChangePriceValue(operation) {
        if (operation === "addition" && acomodation.price < 5003) {
            setAcomodation({...acomodation, price: acomodation.price + 10})
        } else if (operation === "subtration" && acomodation.price > 53) {
            setAcomodation({...acomodation, price: acomodation.price - 10})
        }
    }
    async function handleUploadImages(e) {
        const files = await e.target.files
        setAcomodation({ ...acomodation, images: files })
    }
    function handleShowPreviewImage(elem) {
        const previewImg = URL.createObjectURL(elem)
        return previewImg
    }
    function setAcomodationOption(elem) {
        if (acomodation.hostOptions.includes(elem)) {
            setAcomodation({ ...acomodation, hostOptions: acomodation.hostOptions.filter(op => op !== elem) })
        }
        else if (!acomodation.hostOptions.includes(elem)) {
            acomodation.hostOptions.push(elem)
        }
    }
    return (
        <div className="addAcomodation">
            <header className="addAcomodation-header py-5" style={{ height: "160px" }}>
                <X size={25} className="close-addAcmd-btn position-absolute top-0 ms-3 mt-3 rounded-5 p-1 text-light" onClick={handleToggleAcmdVisib} />
                <h1 className="AddAcomodation-tittle text-light fs-2 me-4 ms-4 mt-4">Em que tipo de espaço você vai hospedar?</h1>
                <nav className="position-fixed bottom-0 container d-flex justify-content-between bg-white p-2">
                    <progress className="position-absolute top-0" value={progress} max={100} style={{ width: "100%", height: "6px" }}></progress>
                    <button className="bg-transparent border-0 text-decoration-underline fw-bold" onClick={handleBackStep}>Voltar</button>
                    <button className="btn btn-dark" onClick={handleNextStep}>{step === 12 ? "Revise seu anúncio" : "Avançar"}</button>
                </nav>
            </header>
            <main className="addAcomodation-main container rounded-top pt-3">
                {step === 1 &&
                    <div className="space-types-container d-flex flex-column">
                        {spaceType.map((type, i) => <button key={i} className="space-types p-2 m-3 rounded-3 bg-transparent" onClick={e => setAcomodation({ ...acomodation, hostSpace: e.target.value })} value={type}>{type}</button>)}
                    </div>
                }
                {step == 2 &&
                    <div className="space-types-desc-container mb-5">
                        {spaceTypesDesc.map((space, i) =>
                            <button key={i} className="space-types p-2 m-3 rounded-3 bg-transparent" onClick={e => setAcomodation({ ...acomodation, hostSpaceDesc: space.desc})} value={space.desc}>
                                <h2 className="fs-4">{space.space}</h2>
                                <p>{space.desc}</p>
                            </button>)
                        }
                    </div>
                }
                {step === 3 &&
                    <div className="space-types-container d-flex flex-column">
                        {placeType.map((place, i) => <button key={i} className="space-types p-2 m-3 rounded-3 bg-transparent" onClick={e => setAcomodation({ ...acomodation, hostPlace: e.target.value })} value={place}>{place}</button>)}
                    </div>
                }
                {step === 4 &&
                    <div className="map-container" style={{ minHeight: '300px' }}>
                        <AutocompleteElem setCordenates={setCordenates} getAddress={(e) => setAcomodation({ ...acomodation, hostLocalization: e })} />
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
                                <MinusCircle className={acomodation.hostsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleDecreaseHostsQuant} />
                                {acomodation.hostsQuant}
                                <PlusCircle className={acomodation.hostsQuant === 16 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleIncreaseHostsQuant} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between p-2 my-2 border rounded-3">
                            Camas
                            <div className="buttons">
                                <MinusCircle className={acomodation.bedsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleDecreaseBedsQuant} />
                                {acomodation.bedsQuant}
                                <PlusCircle className={acomodation.bedsQuant === 14 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleIncreaseBedsQuant} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between p-2 my-2 border rounded-3">
                            Quartos
                            <div className="buttons">
                                <MinusCircle className={acomodation.bedroomsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleDecreaseBedromsQuant} />
                                {acomodation.bedroomsQuant}
                                <PlusCircle className={acomodation.bedroomsQuant === 8 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleIncreaseBedroomsQuant} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between p-2 my-2 border rounded-3">
                            Banheiros
                            <div className="buttons">
                                <MinusCircle className={acomodation.bethroomsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleDecreaseBethromsQuant} />
                                {acomodation.bethroomsQuant}
                                <PlusCircle className={acomodation.bethroomsQuant === 8 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleIncreaseBethroomsQuant} />
                            </div>
                        </div>
                    </div>
                }
                {step === 6 &&
                    <div className="confort-container mb-5">
                        <h2 className="fs-4 fw-bold">Você tem alguma comodidate que mereça destaque ?</h2>
                        <div className="confort container d-flex flex-wrap justify-content-evenly my-3">
                            {confort.map((conf, i) =>
                                <button key={i} className="conv-items my-2" onClick={handleSetConfortItems} value={conf}>{conf}</button>)}
                        </div>
                        <h2 className="fs-4 fw-bold">E estes favoritos dos hospedes ?</h2>
                        <div className="preferences container d-flex flex-wrap justify-content-evenly my-3">
                            {preferences.map((pref, i) =>
                                <button key={i} className="pref-items my-2" onClick={handleSetPreferenceItems} value={pref}>{pref}</button>)}
                        </div>
                        <h2 className="fs-4 fw-bold">Tem algum desses itens de segurança?</h2>
                        <div className="security-items container d-flex flex-wrap justify-content-evenly my-3">
                            {securityItems.map((secItem, i) =>
                                <button key={i} className="sec-items my-2" onClick={handleSetSecurityItems} value={secItem}>{secItem}</button>)}
                        </div>
                    </div>
                }
                {step === 7 &&
                    <div className="images-container d-flex flex-column align-items-center">
                        {acomodation.images.length > 0 &&
                            <>
                                <div className="capa position-relative">
                                    <span className="position-absolute font-smaller ms-1 mt-1 bg-light rounded p-1 fw-bold">Foto de capa</span>
                                    <img src={handleShowPreviewImage(acomodation.images[0])} alt="" style={{ height: "200px", width: "200px" }} className="rouded-4" />
                                </div>
                                {acomodation.images.length > 1 &&
                                    <img src={handleShowPreviewImage(acomodation.images[1])} alt="hospedagem" style={{ height: "200px", width: "200px" }} className="rouded-4 m-3" />
                                }
                                {acomodation.images.length > 2 &&
                                    <img src={handleShowPreviewImage(acomodation.images[2])} alt="hospedagem" style={{ height: "200px", width: "200px" }} className="rouded-4 m-3" />
                                }{acomodation.images.length > 3 &&
                                    <img src={handleShowPreviewImage(acomodation.images[3])} alt="hospedagem" style={{ height: "200px", width: "200px" }} className="rouded-4 m-3" />
                                }{acomodation.images.length > 4 &&
                                    <img src={handleShowPreviewImage(acomodation.images[4])} alt="hospedagem" style={{ height: "200px", width: "200px" }} className="rouded-4 m-3" />
                                }
                            </>
                        }
                        <h2 className="fs-4">Agora vamos adicionar algumas fotos</h2>
                        <label htmlFor="img" className="font-smaller img-container py-5 rounded-2 text-center mt-5 d-flex flex-column align-items-center">
                            <Image size={40} />
                            Escolha pelo menos 5 imagens
                            <input type="file" accept="image/*" className="imgs-input d-none" id="img" multiple onChange={handleUploadImages} />
                        </label>
                    </div>
                }
                {step === 8 &&
                    <div className="anucio-title-container container-fluid d-flex flex-column">
                        <p>O titulo do seu anúncio deve destacar o que há de especial na acomodação.</p>
                        <input type="text" id="" placeholder="Casa do lago" className="anuncio-title p-3" onChange={e => setAcomodation({...acomodation, title: e.target.value})} />
                    </div>
                }
                {step === 9 &&
                    <div className="destaques-container container">
                        <h2 className="fs-4 fw-bold mt-4 mb-3">Escolha o destaque de sua acomodação</h2>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={() => setAcomodation({...acomodation, hostEmphasis: "praia"})}>
                            <img src="https://prints.ultracoloringpages.com/841d46dcc996365d7654b4e4fa5a1350.png" alt="" className="types-item-img" />
                            <span className="ms-2 fw-bold">Praia</span>
                        </button>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={() => setAcomodation({...acomodation, hostEmphasis: "Piscinas incriveis"})}>
                            <img src="https://prints.ultracoloringpages.com/733be6c3fa243f757ec78ac738437c6b.png" alt="" className="types-item-img" />
                            <span className="ms-2 fw-bold">Piscinas incriveis</span>
                        </button>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={() => setAcomodation({...acomodation, hostEmphasis: "Ilhas"})}>
                            <img src="https://www.colorironline.com/images/imgcolor/desenho-ilha-deserta-2-para-colorir.jpg" alt="" className="types-item-img" />
                            <span className="ms-2 fw-bold">Ilhas</span>
                        </button>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={e =>setAcomodation({...acomodation, hostEmphasis: "Surf"})}>
                            <img src="https://cdn-icons-png.flaticon.com/512/250/250330.png" alt="" className="types-item-img" />
                            <span className="ms-2 fw-bold">Surf</span>
                        </button>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={() => setAcomodation({...acomodation, hostEmphasis: "Parques nacionais"})}>
                            <img src="https://storyateverycorner.com/wp-content/uploads/2021/01/national-park-icon.png" alt="" className="types-item-img" />
                            <span className="ms-2 fw-bold">Parques nacionais</span>
                        </button>
                        <button className="emphasis bg-transparent rounded-5 p-2 m-2" onClick={() => setAcomodation({...acomodation, hostEmphasis: "Tropical"})}>
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
                            <MinusCircle size={40} className={acomodation.price === 53 ? "text-secondary" : ""} onClick={() => handleChangePriceValue("subtration")} />
                            <span className="fs-3 mx-3 border py-3 rounded px-5">R${acomodation.price}</span>
                            <PlusCircle size={40} onClick={() => handleChangePriceValue("addition")} />
                        </div>
                        <p className="text-center my-2">Por noite</p>
                        <p className="m-5">Lembre-se que os preços de lugares como o seu geralmente variam de R$100 a R$300.</p>
                        <SimpleCheckButon text={"Ofereça um desconto de 20% aos três primeiros hóspedes para conseguir reservas o quanto antes."} />
                    </div>
                }
                {step === 12 &&
                    <div className="security-items container-fluid d-flex flex-column">
                        <h2 className="mt-5 mb-3">Sua acomodação tem algumas dessa opções?</h2>
                        <SimpleCheckButon text={"Câmera(s) de segurança"} value="Câmera(s) de segurança" func={setAcomodationOption}/>
                        <SimpleCheckButon text={"Armas"} value="Armas" func={setAcomodationOption}/>
                        <SimpleCheckButon text={"Animais perigosos"} value="Animais perigosos" func={setAcomodationOption} />
                        <h2 className="mt-5">O que é importante saber</h2>
                        <p>Ressalto que essa aplicação é apenas para peaticar programação web e não tem nenhum intuito comercial ou finançeiro.</p>
                    </div>
                }
                {step === 13 && 
                    <div>
                        resume
                    </div>                    
                }
            </main>
        </div>
    )
}