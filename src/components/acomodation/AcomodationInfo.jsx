import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CaretLeft, CaretRight, MinusCircle, Pencil, PlusCircle } from "phosphor-react";
import { confort, preferences, securityItems, spaceType, placeType, hostOptions } from "./acomodationItems"
import { GoogleMap, Marker } from "@react-google-maps/api";
import AutocompleteElem from "./AutocompleteElem";
import { deleteAcomodation, updateAcomodation } from "../../assets/acomodationSlice";

export default function AcomodationInfo({ acomodation }) {
    const dispatch = useDispatch()

    const carroussel = useRef(null)
    const user = useSelector(data => data.user.user)

    const [updatedAcomodation, setUpdatedAcomodation] = useState({
        id: acomodation.id,
        hostName: user.name,
        hostSpace: acomodation.hostSpace,
        hostSpaceDesc: acomodation.hostSpaceDesc,
        hostPlace: acomodation.hostPlace,
        hostLocalization: acomodation.hostLocalization,
        hostsQuant: acomodation.hostsQuant,
        bedsQuant: acomodation.bedsQuant,
        bedroomsQuant: acomodation.bedroomsQuant,
        bethroomsQuant: acomodation.bethroomsQuant,
        confort: acomodation.confort.split(","),
        preferences: acomodation.preferences.split(","),
        securityItems: acomodation.securityItems.split(","),
        title: acomodation.title,
        images: acomodation.images,
        hostEmphasis: acomodation.hostEmphasis,
        hostDesc: acomodation.hostDesc,
        price: acomodation.price,
        hostOptions: acomodation.hostOptions.split(","),
    })
    const acomodationImages = acomodation.images.split(",")

    const [cordenates, setCordenates] = useState({
        lat: -4.179914,
        lng: -38.129617
    })

    function handleNextImage() {
        carroussel.current.scrollLeft += carroussel.current.offsetWidth
    }

    function handlePrevImage() {
        carroussel.current.scrollLeft -= carroussel.current.offsetWidth
    }

    function handleChangePriceValue(operation) {
        if (operation === "addition" && updatedAcomodation.price < 5003) {
            setUpdatedAcomodation({ ...updatedAcomodation, price: updatedAcomodation.price + 10 })
        } else if (operation === "subtration" && updatedAcomodation.price > 53) {
            setUpdatedAcomodation({ ...updatedAcomodation, price: updatedAcomodation.price - 10 })
        }
    }

    function handleSelectPlaceType(e) {
        setUpdatedAcomodation({ ...updatedAcomodation, hostPlace: e.target.value })
    }

    function handleselectHostSpace(e) {
        setUpdatedAcomodation({ ...updatedAcomodation, hostSpace: e.target.value })
    }

    function handleIncreaseHostsQuant() {
        updatedAcomodation.hostsQuant < 16 && setUpdatedAcomodation({ ...updatedAcomodation, hostsQuant: updatedAcomodation.hostsQuant + 1 })
    }

    function handleDecreaseHostsQuant() {
        updatedAcomodation.hostsQuant > 1 && setUpdatedAcomodation({ ...updatedAcomodation, hostsQuant: updatedAcomodation.hostsQuant - 1 })
    }

    function handleIncreaseBedsQuant() {
        updatedAcomodation.bedsQuant < 12 && setUpdatedAcomodation({ ...updatedAcomodation, bedsQuant: updatedAcomodation.bedsQuant + 1 })
    }

    function handleDecreaseBedsQuant() {
        updatedAcomodation.bedsQuant > 1 && setUpdatedAcomodation({ ...updatedAcomodation, bedsQuant: updatedAcomodation.bedsQuant - 1 })
    }

    function handleIncreaseBedroomsQuant() {
        updatedAcomodation.bedroomsQuant < 8 && setUpdatedAcomodation({ ...updatedAcomodation, bedroomsQuant: updatedAcomodation.bedroomsQuant + 1 })
    }

    function handleDecreaseBedromsQuant() {
        updatedAcomodation.bedroomsQuant > 1 && setUpdatedAcomodation({ ...updatedAcomodation, bedroomsQuant: updatedAcomodation.bedroomsQuant - 1 })
    }

    function handleIncreaseBethroomsQuant() {
        updatedAcomodation.bethroomsQuant < 8 && setUpdatedAcomodation({ ...updatedAcomodation, bethroomsQuant: updatedAcomodation.bethroomsQuant + 1 })
    }

    function handleDecreaseBethromsQuant() {
        updatedAcomodation.bethroomsQuant > 1 && setUpdatedAcomodation({ ...updatedAcomodation, bethroomsQuant: updatedAcomodation.bethroomsQuant - 1 })
    }

    function handleSetConfortItems(e) {
        e.target.classList.toggle("bg-black")
        e.target.classList.toggle("text-light")

        const conf = e.target.value

        if (updatedAcomodation.confort.includes(conf)) {
            setUpdatedAcomodation({ ...updatedAcomodation, confort: updatedAcomodation.confort.filter(elem => elem !== conf) })
        }
        else if (!updatedAcomodation.confort.includes(conf)) {
            updatedAcomodation.confort.push(conf)
        }
    }

    function handleSetPreferenceItems(e) {
        e.target.classList.toggle("bg-black")
        e.target.classList.toggle("text-light")
        const pref = e.target.value

        if (updatedAcomodation.preferences.includes(pref)) {
            setUpdatedAcomodation({ ...updatedAcomodation, preferences: updatedAcomodation.preferences.filter(elem => elem !== pref) })
        }
        else if (!updatedAcomodation.preferences.includes(pref)) {
            updatedAcomodation.preferences.push(pref)
        }
    }

    function handleSetSecurityItems(e) {
        e.target.classList.toggle("bg-black")
        e.target.classList.toggle("text-light")
        const secItem = e.target.value

        if (updatedAcomodation.securityItems.includes(secItem)) {
            setUpdatedAcomodation({ ...updatedAcomodation, securityItems: updatedAcomodation.securityItems.filter(elem => elem !== secItem) })
        }
        else if (!updatedAcomodation.securityItems.includes(secItem)) {
            updatedAcomodation.securityItems.push(secItem)
        }
    }

    function handleSetHostOptions(e) {
        e.target.classList.toggle("bg-black")
        e.target.classList.toggle("text-light")
        const option = e.target.value

        if (updatedAcomodation.hostOptions.includes(option)) {
            setUpdatedAcomodation({ ...updatedAcomodation, hostOptions: updatedAcomodation.hostOptions.filter(elem => elem !== option) })
        }
        else if (!updatedAcomodation.hostOptions.includes(option)) {
            updatedAcomodation.hostOptions.push(option)
        }
    }

    function handleSetAcomodationDesc(e) {
        setUpdatedAcomodation({ ...updatedAcomodation, hostDesc: e.target.value })
    }

    function handleUpdateAcomodation() {
        dispatch(updateAcomodation(updatedAcomodation))
    }

    function handleDeleteAcomodation() {
        dispatch(deleteAcomodation(acomodation.id))
    }
    return (
        <div className="host-resume-container mx-2 mt-2">
            <section className="card-img-carrossel d-flex position-relative">
                <CaretLeft size={32} onClick={handlePrevImage} className="text-light position-absolute top-50" />
                <div className="card-img-container d-flex" ref={carroussel}>
                    {acomodationImages.map((img, i) => (
                        <img className="card-img rounded" src={`https://mybnb-api.onrender.com/acomodationImages/${img}`} key={i} alt="acomodation" />
                    ))}
                </div>
                <CaretRight size={32} onClick={handleNextImage} className="text-light position-absolute top-50 end-0" />
            </section>
            <section className="mb-4 pb-3 border-bottom mt-3 position-relative">
                <h3 className="fw-bold">Titulo</h3>
                <input type="text" className="form-control" value={updatedAcomodation.title} onChange={e => {
                    setUpdatedAcomodation({ ...updatedAcomodation, title: e.target.value })
                }} />
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </section>
            <section className="mb-4 pb-3 mt-3 position-relative">
                <h3 className="fw-bold">Pernoite</h3>
                <div className="price-container mt-3 d-flex align-items-center">
                    <MinusCircle size={25} className={acomodation.price === 53 ? "text-secondary" : ""} onClick={() => handleChangePriceValue("subtration")} />
                    <span className="fs-4 border-0 rounded px-2">R${updatedAcomodation.price}</span>
                    <PlusCircle size={25} onClick={() => handleChangePriceValue("addition")} />
                </div>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </section>
            <section className="mb-4 pb-3  mt-3 position-relative">
                <h3 className="fw-bold">Acomodação e espaço</h3>
                <h5>{acomodation.hostPlace}:{acomodation.hostSpace}</h5>
                <div className="place-container mt-4 d-flex">
                    {placeType.map((place, i) => (
                        <button type="button" className={updatedAcomodation.hostPlace == place ? "bg-black text-light font-smaller btn border-secondary m-1 p-1 rounded-5" : "font-smaller btn border-secondary m-1 p-1 rounded-5"} key={i} onClick={e => handleSelectPlaceType(e)} value={place}>{place}</button>
                    ))}
                </div>
                <div className="space-container d-flex mt-3">
                    {spaceType.map((space, i) => (
                        <button type="button" className={updatedAcomodation.hostSpace == space ? "bg-dark text-white font-smaller btn border-secondary m-1 p-1 px-2 rounded-5" : "font-smaller btn border-secondary m-1 p-1 px-2 rounded-5"} onClick={e => handleselectHostSpace(e)} key={i} value={space}>{space}</button>
                    ))}
                </div>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </section>
            <section className="mb-4 pb-3 border-bottom position-relative">
                <h3 className="fw-bold">Hóspedes e comodos</h3>
                <p className="">
                    {acomodation.hostsQuant}
                    {acomodation.hostsQuant > 1 ? " hóspedes " : " hóspede "}
                    - {acomodation.bedsQuant}
                    {acomodation.bedsQuant > 1 ? " camas " : " cama "}
                    - {acomodation.bedroomsQuant}
                    {acomodation.bedroomsQuant > 1 ? " quartos " : " quarto "}  - {acomodation.bethroomsQuant}
                    {acomodation.bethroomsQuant > 1 ? " banheiros" : " banheiroo"}</p>
                <div className="hosts">
                    <div className="d-flex justify-content-between p-2 my-2 border rounded-3">
                        Hóspedes
                        <div className="buttons">
                            <MinusCircle className={updatedAcomodation.hostsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleDecreaseHostsQuant} />
                            {updatedAcomodation.hostsQuant}
                            <PlusCircle className={updatedAcomodation.hostsQuant === 16 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleIncreaseHostsQuant} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between p-2 my-2 border rounded-3">
                        Camas
                        <div className="buttons">
                            <MinusCircle className={updatedAcomodation.bedsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleDecreaseBedsQuant} />
                            {updatedAcomodation.bedsQuant}
                            <PlusCircle className={updatedAcomodation.bedsQuant === 14 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleIncreaseBedsQuant} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between p-2 my-2 border rounded-3">
                        Quartos
                        <div className="buttons">
                            <MinusCircle className={updatedAcomodation.bedroomsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleDecreaseBedromsQuant} />
                            {updatedAcomodation.bedroomsQuant}
                            <PlusCircle className={updatedAcomodation.bedroomsQuant === 8 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleIncreaseBedroomsQuant} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between p-2 my-2 border rounded-3">
                        Banheiros
                        <div className="buttons">
                            <MinusCircle className={updatedAcomodation.bethroomsQuant === 1 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleDecreaseBethromsQuant} />
                            {updatedAcomodation.bethroomsQuant}
                            <PlusCircle className={updatedAcomodation.bethroomsQuant === 8 ? "mx-1 border-secondary text-secondary" : "mx-1"} size={22} onClick={handleIncreaseBethroomsQuant} />
                        </div>
                    </div>
                </div>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-1" />
            </section>
            <section className="mb-4 pb-3 border-bottom mt-3 position-relative">
                <h3 className="fw-bold">Confortos externos</h3>
                <div className="confort-container d-flex flex-wrap justify-content-center pt-3">
                    {confort.map((conf, i) =>
                        <button key={i} className={acomodation.confort.split(",").filter(e => e == conf) == conf ? "conv-items bg-black text-light m-1" : "conv-items py-3 m-2"} value={conf} onClick={e => handleSetConfortItems(e)}>{conf}</button>)
                    }
                </div>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </section>
            <section className="mb-4 pb-3 border-bottom mt-3 position-relative">
                <h3 className="fw-bold">Confortos internos</h3>
                <div className="preferences-container d-flex flex-wrap justify-content-center pt-3">
                    {preferences.map((pref, i) =>
                        <button key={i} className={acomodation.preferences.split(",").filter(e => e == pref) == pref ? "conv-items bg-black text-light m-1" : "conv-items py-3 m-2"} value={pref} onClick={e => handleSetPreferenceItems(e)}>{pref}</button>)
                    }
                </div>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </section>
            <section className="mb-4 pb-3 border-bottom mt-3 position-relative">
                <h3 className="fw-bold">Items de segurança</h3>
                <div className="preferences-container d-flex flex-wrap justify-content-center pt-3">
                    {securityItems.map((secItem, i) =>
                        <button key={i} className={acomodation.securityItems.split(",").filter(e => e == secItem) == secItem ? "conv-items bg-black text-light m-1" : "conv-items py-3 m-2"} value={secItem} onClick={e => handleSetSecurityItems(e)} >{secItem}</button>)
                    }
                </div>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </section>
            <section className="mb-4 pb-3 border-bottom position-relative">
                <h3 className="fw-bold">outros itens de segurança</h3>
                <div className="hostOptions-container d-flex flex-wrap justify-content-center pt-3">
                    {
                        hostOptions.map((op, i) => (
                            <button key={i} className={acomodation.hostOptions.split(",").filter(e => e == op) == op ? "conv-items bg-black text-light m-1" : "conv-items py-3 m-2"} value={op} onClick={e => handleSetHostOptions(e)} >{op}</button>
                        ))
                    }
                </div>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </section>
            <section className="mb-4 pb-3 border-bottom position-relative">
                <h3 className="fw-bold">Descrição da acomodação</h3>
                <p>{acomodation.hostDesc}</p>
                <div className="description-container d-flex flex-column">
                    <textarea id="" cols="30" rows="10" className="border-secondary mx-3 rounded p-1" onChange={e => handleSetAcomodationDesc(e)}></textarea>
                </div>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </section >
            <section className="mb-2 pb-3 border-bottom position-relative">
                <h3 className="fw-bold">Localização</h3>
                <p className="my-3">{acomodation.hostLocalization}</p>
                <div className="map-container m-2" style={{ minHeight: '300px' }}>
                    <AutocompleteElem setCordenates={setCordenates}
                        setAcomodation={setUpdatedAcomodation} acomodation={updatedAcomodation} />
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
                <Pencil size={25} className="ms-2 position-absolute top-0 end-0" />
            </section>
            <div className="buttons-container my-5 d-flex justify-content-between">
                <button className="btn btn-primary" onClick={ handleUpdateAcomodation}>Salvar alterações</button>
                <button className="btn btn-danger" onClick={handleDeleteAcomodation}>Excluir</button>
            </div>
        </div>
    )
}