import { useDispatch, useSelector } from "react-redux"
import { ArrowLeft, Equalizer, MagnifyingGlass } from "phosphor-react"
import { clearDestiny } from "../../assets/appSlice"
export default function SearchBar({ handleOpenDestiny, handleOpenFilter }) {
    const dispatch = useDispatch()
    const hasDestiny = useSelector(data => data.app.destiny)
    function handleClearDestiny() {
        dispatch(clearDestiny())
    }
    return (
        <div className="search-container container position-relative p-2 mt-1">
            <label htmlFor="search-input" className="search-input form-control rounded-5 py-4">
                <input type="button" title="btn" id="search-input" className="d-none" onClick={() => handleOpenDestiny()} />
                <p className="search-lbl">Para onde?</p>
                <div className="search-desc-container position-absolute d-flex">
                    <span className="search-desc-item">Qualquer lugar</span>
                    <span className="desc-item-divisor mx-1">.</span>
                    <span className="search-desc-item">Qualquer semana</span>
                    <span className="desc-item-divisor mx-1">.</span>
                    <span className="search-desc-item search-desc-item--large">Hóspedes?</span>
                </div>
                {!hasDestiny && <MagnifyingGlass  className="position-absolute search-button-mgnf-glass mt-1" size={23}/>}
            </label>
            {hasDestiny && <ArrowLeft size={24} className="position-absolute search-button-mgnf-glass mt-1" onClick={handleClearDestiny} />}
            <div className="search-filter-container position-absolute mt-1 me-2 p-1">
                <Equalizer className="search-filter-btn py-1 rounded-5 bg-transparent" size={32} onClick={handleOpenFilter} />
            </div>
        </div>
    )
}