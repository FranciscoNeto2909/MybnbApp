import { MinusCircle, PlusCircle, X } from "phosphor-react";
import { useState } from "react";

export default function SpaceDesc({ setSpaceDescVisib }) {
    const [guests, setGuests] = useState(4)
    const [toggleSpaceType, setToggleSpaceType] = useState(false)
    const [wholeSpace, setWholeSpace] = useState(false)
    const [wholeBedroom, setWholeBedroom] = useState(false)

    function handleSelectWholeSpace() {
        setWholeSpace(!wholeSpace)
        setGuests(4)
        setToggleSpaceType(!toggleSpaceType)
    }
    function handleSelectWholeBedroom() {
        setWholeBedroom(!wholeBedroom)
        setGuests(2)
        setToggleSpaceType(!toggleSpaceType)
    }
    function handleAddValue() {
        if (guests < 16) {
            setGuests(guests + 1)
        }
    }
    function handleDecreaseValue() {
        if (guests > 1) {
            setGuests(guests - 1)
        }
    }
    return (
        <div className="spaceDesc-container position-fixed start-0 top-0 container-fluid" style={{ height: "100vh" }}>
            <div className="position-fixed start-0 bottom-0 bg-light container-fluid rounded-top" style={{ height: "80vh" }}>
                <header className="position-relative pt-3 bottom-border">
                    <X size={20} onClick={() => setSpaceDescVisib(false)} className="position-absolute" />
                    <p className="text-center fw-bold">Descreva seu espaço</p>
                </header>
                <main>
                    <div className="addressAndRegion bottom-border py-5">
                        <label className="form-label" htmlFor="address">Endereço ou região</label>
                        <input id="address" type="text" className="form-control" />
                    </div>
                    <div className="space-type bottom-border py-5">
                        <label htmlFor="space-inpt">Tipo de espaço</label>
                        <div className="space-type-button-container d-flex justify-content-evenly p-2 rounded-5 mt-4">
                            <button className={toggleSpaceType ? "font-smaller bg-transparent border-0 rounded-4 p-1 px-2 fw-bold" : "font-smaller bg-light border-0 rounded-4 p-1 px-2 fw-bold"} onClick={handleSelectWholeSpace}>Espaço inteiro</button>
                            <button className={toggleSpaceType ? "font-smaller bg-light border-0 rounded-4 p-1 px-2 fw-bold" : "font-smaller bg-transparent border-0 rounded-4 p-1 px-2 fw-bold"} onClick={handleSelectWholeBedroom}>Quarto inteiro</button>
                        </div>
                    </div>
                    <div className="guests-container d-flex justify-content-between py-4 px-2 bottom-border">
                        <p className="mt-1 fw-bold">Hóspedes</p>
                        <div className="guests-buttons">
                            <MinusCircle size={30} onClick={handleDecreaseValue} />
                            <span className="mx-1">
                                {guests}
                            </span>
                            <PlusCircle size={30} onClick={handleAddValue} />
                        </div>
                    </div>
                    <div className="container d-flex justify-content-center mt-5">
                        <button className="btn btn-dark text-light px-4 py-2">Atualize sua estimativa</button>
                    </div>
                </main>
            </div>
        </div>
    )
}