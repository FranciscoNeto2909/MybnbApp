import React, { useState } from "react";
import { X, MinusCircle, PlusCircle, Image, Bed } from "phosphor-react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import AutocompleteElem from "./AutocompleteElem";
import SimpleCheckButon from "../buttons/SimpleCheckButton"
import { useDispatch, useSelector } from "react-redux";
import { postAcomodation, postAcomodationImage } from "../../assets/acomodationSlice";
import { confort, preferences, securityItems, spaceType, spaceTypesDesc, placeType, hostEmphasis } from "./acomodationItems"

export default function AddAcomodation({ handleToggleAcmdVisib }) {
    const dispatch = useDispatch()
    const [posting, setPosting] = useState(false)
    const [step, setStep] = useState(1)
    const [char, setChar] = useState(0)
    const user = useSelector(data => data.user.user)
    const [spaceTypeId, setSpaceTypeId] = useState(-1)
    const [hostSpaceId, setHostSpaceId] = useState(-1)
    const [hostPlaceId, setHostPlaceid] = useState(-1)
    const [hostEmphasisId, setHostEmphasisid] = useState(-1)
    const [filed, setFiled] = useState(false)
    const [progress, setProgress] = useState(7.5)
    const [cordenates, setCordenates] = useState({
        lat: -4.179914,
        lng: -38.129617
    })
    const [images, setImages] = useState([])
    const [acomodation, setAcomodation] = useState({
        hostName: user.name,
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
        title: "",
        hostEmphasis: "",
        hostDesc: "",
        price: 53,
        hostOptions: []
    })


    function handleNextStep() {
        if (step === 1 && acomodation.hostSpace === "") {
            alert("Selecione um campo antes de ir para o proximo passo!")
            setFiled(false)
        } else if (step === 1 && acomodation.hostSpace !== "") {
            setStep(step + 1)
            setFiled(false)
            setProgress(progress + 7.5)
        }
        if (step === 2 && acomodation.hostSpaceDesc === "") {
            alert("Selecione um campo antes de ir para o proximo passo!")
            setFiled(false)
        } else if (step === 2 && acomodation.hostSpaceDesc !== "") {
            setStep(step + 1)
            setFiled(false)
            setProgress(progress + 7.5)
        }
        if (step === 3 && acomodation.hostPlace === "") {
            alert("Selecione um campo antes de ir para o proximo passo!")
            setFiled(false)
        } else if (step === 3 && acomodation.hostPlace !== "") {
            setStep(step + 1)
            setFiled(false)

            setProgress(progress + 7.5)
        }
        if (step === 4 && acomodation.hostLocalization === "") {
            setFiled(false)
        } else if (step === 4 && acomodation.hostLocalization !== "") {
            setStep(step + 1)
            setFiled(true)
            setProgress(progress + 7.5)
        }
        if (step === 5) {
            setStep(step + 1)
            setProgress(progress + 7.5)
        }
        if (step === 6) {
            const confortStr = acomodation.confort.toString();
            setAcomodation({ ...acomodation, confort: confortStr })

            setStep(step + 1)
            setFiled(false)
            setProgress(progress + 7.5)
        }
        if (step === 7 && images == []) {
            alert("Selecione um campo antes de ir para o proximo passo!")
            setFiled(false)
        } else if (step === 7 && images.length > 4) {
            const prefStr = acomodation.preferences.toString();
            setAcomodation({ ...acomodation, preferences: prefStr })
            setStep(step + 1)
            setFiled(false)
            setProgress(progress + 7.5)
        }
        if (step === 8 && acomodation.title === "") {
            alert("Selecione um campo antes de ir para o proximo passo!")
            setFiled(false)
        } else if (step === 8 && acomodation.title !== "") {
            const secItemStr = acomodation.securityItems.toString();
            setAcomodation({ ...acomodation, securityItems: secItemStr });

            setStep(step + 1)
            setFiled(false)
            setProgress(progress + 7.5)
        }
        if (step === 9 && acomodation.hostEmphasis == []) {
            alert("Selecione um campo antes de ir para o proximo passo!")
            setFiled(false)
        } else if (step === 9 && acomodation.hostEmphasis != []) {
            const hostEmphasisStr = acomodation.hostEmphasis.toString()
            setAcomodation({ ...acomodation, hostEmphasis: hostEmphasisStr })

            setStep(step + 1)
            setFiled(false)
            setProgress(progress + 7.5)
        }
        if (step === 10 && acomodation.hostDesc === "") {
            alert("Selecione um campo antes de ir para o proximo passo!")
            setFiled(false)
        } else if (step === 10 && acomodation.hostDesc !== "") {
            setStep(step + 1)
            setFiled(true)
            setProgress(progress + 7.5)
        }
        if (step === 11) {
            setStep(step + 1)
            setFiled(true)
            setProgress(progress + 7.5)
        }
        if (step === 12) {
            const hostOptionStr = acomodation.hostOptions.toString();
            setAcomodation({ ...acomodation, hostOptions: hostOptionStr })
            setStep(step + 1)
            setFiled(true)
            setProgress(progress + 7.5)
        }
    }

    function handleBackStep() {
        if (step > 1) {
            setStep(step - 1)
            setProgress(progress - 7.5)
        }
    }

    function handleSetResult(results) {
        setAcomodation({ ...acomodation, hostLocalization: results[0].formatted_address })
        setFiled(true)
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
        e.target.classList.toggle("bg-black")
        e.target.classList.toggle("text-light")

        if (acomodation.confort.includes(conf)) {
            setAcomodation({ ...acomodation, confort: acomodation.confort.filter(elem => elem !== conf) })
        }
        else if (!acomodation.confort.includes(conf)) {
            acomodation.confort.push(conf)
        }
    }

    function handleSetPreferenceItems(e) {
        e.target.classList.toggle("bg-black")
        e.target.classList.toggle("text-light")
        const pref = e.target.value
        if (acomodation.preferences.includes(pref)) {
            setAcomodation({ ...acomodation, preferences: acomodation.preferences.filter(elem => elem !== pref) })
        }
        else if (!acomodation.preferences.includes(pref)) {
            acomodation.preferences.push(pref)
        }
    }

    function handleSetSecurityItems(e) {
        e.target.classList.toggle("bg-black")
        e.target.classList.toggle("text-light")
        const secItem = e.target.value
        if (acomodation.securityItems.includes(secItem)) {
            setAcomodation({ ...acomodation, securityItems: acomodation.securityItems.filter(elem => elem !== secItem) })
        }
        else if (!acomodation.securityItems.includes(secItem)) {
            acomodation.securityItems.push(secItem)
        }
    }

    function handleChangeAcomodationDesc(e) {
        setAcomodation({ ...acomodation, hostDesc: e.target.value })
        setFiled(true)
        if (e.keyCode !== 8 && char < 270) {
            setChar(char + 1)
        }
        else if (e.keyCode === 8 && char > 0) {
            setChar(char - 1)
        }
    }

    function handleChangePriceValue(operation) {
        if (operation === "addition" && acomodation.price < 5003) {
            setAcomodation({ ...acomodation, price: acomodation.price + 10 })
        } else if (operation === "subtration" && acomodation.price > 53) {
            setAcomodation({ ...acomodation, price: acomodation.price - 10 })
        }
    }

    async function handleUploadImages(e) {
        const file = await e.target.files[0]
        const isSameName = images.every((elem) => file.name !== elem.name)
        const isSameSize = images.every((elem) => file.size !== elem.size)
        images.length > 3 && setFiled(true)
        if (file !== undefined && isSameName && isSameSize) {
            setImages([...images, file])
        } else {
            alert("a imagem ja foi adicionada")
        }
    }

    function handlePreviewImage(elem) {
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

    async function handlePostAcomodation() {
        setPosting(true)
        await dispatch(postAcomodation(acomodation))
            .then(e => {
                if (e.payload.id) {
                    dispatch(postAcomodationImage({
                        images,
                        id: e.payload.id
                    }))
                        .then(() => {
                            setPosting(false)
                            handleToggleAcmdVisib()
                        })
                }
            })
    }

    return (
        <div className="addAcomodation">
            <header className="addAcomodation-header py-5" style={{ height: "160px" }}>
                <X size={25} className="close-addAcmd-btn position-absolute top-0 ms-3 mt-3 rounded-5 p-1 text-light" onClick={handleToggleAcmdVisib} />
                <h1 className="AddAcomodation-tittle text-light fs-2 me-4 ms-4 mt-4">Em que tipo de espa??o voc?? vai hospedar?</h1>
                <nav className="position-fixed bottom-0 container d-flex justify-content-between bg-white p-2">
                    <progress className="position-absolute top-0" value={progress} max={100} style={{ width: "100%", height: "6px" }}></progress>
                    <button className="bg-transparent border-0 text-decoration-underline fw-bold" onClick={handleBackStep}>Voltar</button>
                    {step === 13 ?
                        <button className="btn btn-danger" onClick={posting == false ? handlePostAcomodation : () => { }}>{posting ? "Criando acomoda????o..." : "Salve seu anucio"}
                        </button> :
                        <button className={filed ? "btn btn-dark" : "btn btn-secondary"} onClick={handleNextStep}>{step === 12 ? "Revise seu an??ncio" : "Avan??ar"}
                        </button>}

                </nav>
            </header>
            <main className="addAcomodation-main container rounded-top pt-3">
                {step === 1 &&
                    <div className="space-types-container d-flex flex-column">
                        {spaceType.map((type, i) =>
                            <button key={i} className={spaceTypeId == i ? "border-dark space-types p-2 m-3 rounded-3 bg-transparent" : "space-types p-2 m-3 rounded-3 bg-transparent"}
                                onClick={e => {
                                    setAcomodation({ ...acomodation, hostSpace: e.target.value })
                                    setSpaceTypeId(i)
                                    setFiled(true)
                                }}
                                value={type}>
                                {type}
                            </button>)}
                    </div>
                }
                {step == 2 &&
                    <div className="space-types-desc-container mb-5">
                        {spaceTypesDesc.map((space, i) =>
                            <button key={i} className={hostSpaceId == i ? "space-types border-dark p-2 m-3 rounded-3 bg-transparent" : "space-types p-2 m-3 rounded-3 bg-transparent"}
                                onClick={e => {
                                    setAcomodation({ ...acomodation, hostSpaceDesc: space.desc })
                                    setHostSpaceId(i)
                                    setFiled(true)
                                }}
                                value={space.desc}>
                                <h2 className="fs-4">{space.space}</h2>
                                <p>{space.desc}</p>
                            </button>)
                        }
                    </div>
                }
                {step === 3 &&
                    <div className="space-types-container d-flex flex-column">
                        {placeType.map((place, i) =>
                            <button key={i} className={hostPlaceId == i ? "space-types border-dark p-2 m-3 rounded-3 bg-transparent" : "space-types p-2 m-3 rounded-3 bg-transparent"} onClick={e => {
                                setAcomodation({ ...acomodation, hostPlace: e.target.value })
                                setHostPlaceid(i)
                                setFiled(true)
                            }}
                                value={place}>
                                {place}
                            </button>)}
                    </div>
                }
                {step === 4 &&
                    <div className="map-container" style={{ minHeight: '300px' }}>
                        <AutocompleteElem setCordenates={setCordenates}
                            handleSetResult={handleSetResult} />
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
                            H??spedes
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
                        <h2 className="fs-4 fw-bold">Voc?? tem alguma comodidate que mere??a destaque ?</h2>
                        <div className="confort container d-flex flex-wrap justify-content-evenly my-3">
                            {confort.map((conf, i) =>
                                <button key={i} className="conv-items my-2" onClick={handleSetConfortItems} value={conf}>{conf}</button>)}
                        </div>
                        <h2 className="fs-4 fw-bold">E estes favoritos dos hospedes ?</h2>
                        <div className="preferences container d-flex flex-wrap justify-content-evenly my-3">
                            {preferences.map((pref, i) =>
                                <button key={i} className="pref-items my-2" onClick={handleSetPreferenceItems} value={pref}>{pref}</button>)}
                        </div>
                        <h2 className="fs-4 fw-bold">Tem algum desses itens de seguran??a?</h2>
                        <div className="security-items container d-flex flex-wrap justify-content-evenly my-3">
                            {securityItems.map((secItem, i) =>
                                <button key={i} className="sec-items my-2" onClick={handleSetSecurityItems} value={secItem}>{secItem}</button>)}
                        </div>
                    </div>
                }
                {step === 7 &&
                    <div className="images-container d-flex flex-column align-items-center">
                       <h2 className="fs-4">Agora vamos adicionar algumas fotos</h2>
                        {images.map((img, i) => (
                            images[0] == img ?
                                <div key={i} className="preview-container container d-flex justify-content-center position-relative">
                                    <span className="position-absolute font-smaller ms-1 mt-1 bg-light rounded p-1 fw-bold">Foto de capa</span>
                                    <img src={handlePreviewImage(img)} alt="" style={{ height: "200px", width: "200px" }} className="rounded-4" />
                                </div> :
                                <div key={i} className="preview-container container d-flex justify-content-center my-2">
                                    <img src={handlePreviewImage(img)} alt="" style={{ height: "200px", width: "200px" }} className="rounded-4" />
                                </div>
                        ))
                        }
                        <div className="input-img-container container">
                            <label htmlFor="img" className="font-smaller img-container py-5 rounded-2 text-center mt-5 d-flex flex-column align-items-center">
                                <Image size={40} />
                                {images.length < 5 ? `Escolha pelo menos ${5 - images.length} imagens` : "Escolha no maximo 8 imagens"}
                                <input type="file" accept="image/*" className="imgs-input d-none" id="img" onChange={handleUploadImages} />
                            </label>
                        </div>
                    </div>
                }
                {step === 8 &&
                    <div className="anucio-title-container container-fluid d-flex flex-column">
                        <p>O titulo do seu an??ncio deve destacar o que h?? de especial na acomoda????o.</p>
                        <input type="text" id="" placeholder="Casa do lago" className="anuncio-title p-3" onChange={e => {
                            setAcomodation({ ...acomodation, title: e.target.value })
                            setFiled(true)
                        }} />
                    </div>
                }
                {step === 9 &&
                    <div className="destaques-container container">
                        <h2 className="fs-4 fw-bold mt-4 mb-3">Escolha o destaque de sua acomoda????o</h2>
                        {
                            hostEmphasis.map((host, i) => (
                                <button className={hostEmphasisId == i ? "emphasis border-dark bg-transparent rounded-5 p-2 m-2" : "emphasis bg-transparent rounded-5 p-2 m-2"} key={i} onClick={() => {
                                    setAcomodation({ ...acomodation, hostEmphasis: host.name })
                                    setHostEmphasisid(i)
                                    setFiled(true)
                                }}>
                                    <img src={host.image} alt="emphasis" className="types-item-img" />
                                    <span className="ms-2 fw-bold">{host.name}</span>
                                </button>
                            ))
                        }
                    </div>
                }
                {step === 10 &&
                    <div className="description-container d-flex flex-column">
                        <h2 className="fs-4 fw-bold">Nos fale um pouco sobre sua comoda????o</h2>
                        <textarea id="" cols="30" rows="10" placeholder="Voc?? vai se divertir muito neste local" className="acomodation-desc p-2 mx-auto" maxLength="270" onKeyDown={e => handleChangeAcomodationDesc(e)}></textarea>
                        <span className="ms-5 mt-2 text-secondary">{char}/270</span>
                    </div>
                }
                {step === 11 &&
                    <div>
                        <h2>vamos definir seu pre??o</h2>
                        <div className="price-container mt-5 d-flex align-items-center justify-content-center">
                            <MinusCircle size={40} className={acomodation.price === 53 ? "text-secondary" : ""} onClick={() => handleChangePriceValue("subtration")} />
                            <span className="fs-3 mx-3 border py-3 rounded px-5">R${acomodation.price}</span>
                            <PlusCircle size={40} onClick={() => handleChangePriceValue("addition")} />
                        </div>
                        <p className="text-center my-2">Por noite</p>
                        <p className="m-5">Lembre-se que os pre??os de lugares como o seu geralmente variam de R$100 a R$300.</p>
                        <SimpleCheckButon text={"Ofere??a um desconto de 20% aos tr??s primeiros h??spedes para conseguir reservas o quanto antes."} />
                    </div>
                }
                {step === 12 &&
                    <div className="security-items container-fluid d-flex flex-column">
                        <h2 className="mt-5 mb-3">Sua acomoda????o tem algumas dessa op????es?</h2>
                        <SimpleCheckButon text={"C??mera(s) de seguran??a"} value="C??mera(s) de seguran??a" func={setAcomodationOption} />
                        <SimpleCheckButon text={"Armas"} value="Armas" func={setAcomodationOption} />
                        <SimpleCheckButon text={"Animais perigosos"} value="Animais perigosos" func={setAcomodationOption} />
                        <h2 className="mt-5">O que ?? importante saber</h2>
                        <p>Ressalto que essa aplica????o ?? apenas para peaticar programa????o web e n??o tem nenhum intuito comercial ou finan??eiro.</p>
                    </div>
                }
                {step === 13 &&
                    <div className="host-resume-container">
                        <div className="host-resume-header d-flex flex-column">
                            <img src={handlePreviewImage(images[0])} style={{ height: "300px", width: "300px" }} className="rounded-3 mx-auto my-3" alt="capa" />
                            <h1 className="fw-bold mb-4">{acomodation.title}</h1>
                        </div>
                        <div className="mb-4 pb-3 border-bottom">
                            <h3>{acomodation.hostPlace}:{acomodation.hostSpace}</h3>
                        </div>
                        <div className="mb-4 pb-3 border-bottom">
                            <p className="font-smaller">{acomodation.hostsQuant} h??spedes - {acomodation.bedroomsQuant} quarto(os) - {acomodation.bedsQuant} cama(as) - {acomodation.bethroomsQuant} banheiro(os)</p>
                        </div>
                        <div className="mb-4 pb-3 border-bottom">
                            <p>{acomodation.hostDesc}</p>
                        </div>
                        <div className="mb-5 pb-3 border-bottom">
                            <h3>Localiza????o</h3>
                            <p className="my-3">{acomodation.hostLocalization}</p>
                            <p className="mt-5">Seus dados n??o ser??o vendidos nem compartilhados com outras empresas, uma vez que essa aplica????o ?? apenas para praticar.</p>
                        </div>
                    </div>
                }
            </main>
        </div>
    )
}