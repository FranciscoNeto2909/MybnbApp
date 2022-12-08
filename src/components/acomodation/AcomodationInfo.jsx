import React, { useRef } from "react";
import { CaretLeft, CaretRight, MinusCircle, Pencil, PlusCircle } from "phosphor-react";
import { useState } from "react";

export default function AcomodationInfo({ acomodation }) {
    const spaceType = ["Apartamento", "Casa", "Chalé", "Acomodação única", "Pousada", "Hotel botique"]
    const placeType = ["Lugar inteiro", "Um quarto inteiro", "Um quarto compartilhado"]

    const carroussel = useRef(null)
    const acomodationImages = acomodation.images.split(",")
    const [updatedAcomodation, setUpdatedAcomodation] = useState(acomodation)

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
        setUpdatedAcomodation({...updatedAcomodation, hostPlace: e.target.value})
    }

    function handleselectHostSpace(e) {
        setUpdatedAcomodation({...updatedAcomodation, hostSpace: e.target.value})
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

    return (
        <div className="host-resume-container mx-2 mt-2">
            <div className="card-img-carrossel d-flex position-relative">
                <CaretLeft size={32} onClick={handlePrevImage} className="text-light position-absolute top-50" />
                <div className="card-img-container d-flex" ref={carroussel}>
                    {acomodationImages.map((img, i) => (
                        <img className="card-img rounded" src={`http://localhost:3001/acomodationImages/${img}`} key={i} alt="acomodation" />
                    ))}
                </div>
                <CaretRight size={32} onClick={handleNextImage} className="text-light position-absolute top-50 end-0" />
            </div>
            <div className="mb-4 pb-3 border-bottom mt-3 position-relative">
                <h3 className="fw-bold">Titulo</h3>
                <input type="text" className="form-control" value={updatedAcomodation.title} onChange={e => {
                    setUpdatedAcomodation({ ...updatedAcomodation, title: e.target.value })
                }} />
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </div>
            <div className="mb-4 pb-3 border-bottom mt-3 position-relative">
                <h3 className="fw-bold">Pernoite</h3>
                <div className="price-container mt-3 d-flex align-items-center">
                    <MinusCircle size={25} className={acomodation.price === 53 ? "text-secondary" : ""} onClick={() => handleChangePriceValue("subtration")} />
                    <span className="fs-4 border rounded px-2">R${updatedAcomodation.price}</span>
                    <PlusCircle size={25} onClick={() => handleChangePriceValue("addition")} />
                </div>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </div>
            <div className="mb-4 pb-3 border-bottom mt-3 position-relative">
                <h3 className="fw-bold">Acomodação e espaço</h3>
                <h5>{acomodation.hostPlace}:{acomodation.hostSpace}</h5>
                <div className="place-container mt-4 d-flex">
                    {placeType.map( (place, i) => (
                        <button type="button" className={updatedAcomodation.hostPlace == place ? "bg-black text-light font-smaller btn border-secondary m-1 p-1 rounded-5" : "font-smaller btn border-secondary m-1 p-1 rounded-5"} key={i} onClick={e => handleSelectPlaceType(e)} value={place}>{place}</button>
                    ))}
                </div>
                <div className="space-container d-flex mt-3">
                    {spaceType.map( (space, i) => (
                        <button type="button" className={updatedAcomodation.hostSpace == space ? "bg-dark text-white font-smaller btn border-secondary m-1 p-1 px-2 rounded-5" : "font-smaller btn border-secondary m-1 p-1 px-2 rounded-5"} onClick={ e => handleselectHostSpace(e)} key={i} value={space}>{space}</button>
                    ))}
                </div>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </div>
            <div className="mb-4 pb-3 border-bottom position-relative">
                <h3 className="fw-bold">Hóspedes e comodos</h3>
                <p className="">
                    {acomodation.hostsQuant}
                    {acomodation.hostsQuant > 1 ? " hóspedes " : " hóspede "}
                    - {acomodation.bedroomsQuant}
                    {acomodation.bedroomsQuant > 1 ? " quartos " : " quarto "} - {acomodation.bedsQuant}
                    {acomodation.bedsQuant > 1 ? " camas " : " cama "} - {acomodation.bethroomsQuant}
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
            </div>
            <div className="mb-4 pb-3 border-bottom mt-3 position-relative">
                <h3 className="fw-bold">Confortos externos</h3>
                <p>{acomodation.confort}</p>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </div>
            <div className="mb-4 pb-3 border-bottom mt-3 position-relative">
                <h3 className="fw-bold">Confortos internos</h3>
                <p>{acomodation.preferences}</p>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </div>
            <div className="mb-4 pb-3 border-bottom mt-3 position-relative">
                <h3 className="fw-bold">Items de segurança</h3>
                <p>{acomodation.securityItems}</p>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </div>
            <div className="mb-4 pb-3 border-bottom position-relative">
                <h3 className="fw-bold">Descrição da acomodação</h3>
                <p>{acomodation.hostDesc}</p>
                <Pencil size={25} className="position-absolute top-0 end-0 ms-2" />
            </div>
            <div className="mb-2 pb-3 border-bottom position-relative">
                <h3 className="fw-bold">Localização</h3>
                <p className="my-3">{acomodation.hostLocalization}</p>
                <Pencil size={25} className="ms-2 position-absolute top-0 end-0" />
            </div>
            <button className="mb-5 btn btn-primary">Salvar alterações</button>
        </div>
    )
}