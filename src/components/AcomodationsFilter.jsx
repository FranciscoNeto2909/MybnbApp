export default function AcomodationsFilter({handleOpenFilter}) {
    return(
        <div className="acmd-filter-container container-fluid d-flex position-absolute top-0 pt-3">
            <div className="acmd-filte container-fluid rounded-4 bg-light">
                <header className="container-fluid position-relative pt-2">
                    <button className="close-btn position-absolute border-0 fw-bold m-0 p-0 top-0 bg-transparent" onClick={handleOpenFilter}>x</button>
                    <h1 className="text-center fs-4">Filtros</h1>
                </header>
            <div className="acmd-price mt-4">
                <h2 className="fs-5">Faixa de preço</h2>
                <p className="acmd-price-desc text-secondary">O preço médio por noite é de R$2.388</p>
                <div className="price-table">
                    <div className="min-price-container">
                        <label htmlFor="minPrice">preço mínimo</label>
                        <input type="text" id="minPrice"/>
                    </div>
                    <div className="max-price-container">
                        <label htmlFor="maxPrice">preço máximo</label>
                        <input type="text" id="maxPrice" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}