export default function SearchBar({handleOpenFilter,handleOpenDestiny}) {
    return (
        <div className="search-container position-relative p-2 mt-2 mx-3">
            <button type="text" id="search-input" className="search-input form-control rounded-5 ps-5 py-4" onClick={handleOpenDestiny} > 
            </button>
            <div className="search-filter-container position-absolute px-3 p-2">
                <button className="search-filter-btn py-1 rounded-5 bg-transparent" onClick={handleOpenFilter}><img src="https://icons-for-free.com/iconfiles/png/512/filter-131979013401653166.png" className="search-button-img" /> </button>
            </div>
            <label htmlFor="search-input" className="search-lbl">Para onde?</label>
            <div className="search-desc-container position-absolute d-flex">
                <span className="search-desc-item">Qualquer lugar</span>
                <span className="desc-item-divisor mx-1">.</span>
                <span  className="search-desc-item">Qualquer semana</span>
                <span className="desc-item-divisor mx-1">.</span>
                <span  className="search-desc-item search-desc-item--large">Hóspedes?</span>
            </div>
            <span className="position-absolute search-button-mgnf-glass"><img className="icon" src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png" alt="lupa" /></span>
        </div>
    )
}