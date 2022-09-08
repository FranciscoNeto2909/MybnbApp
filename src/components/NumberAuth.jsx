export default function name({handleOpenNumberAuth, num}) {
    return(
        <div className="numAuth-container">
            <header className="numAuth-header container-fluid mt-2 position-relative d-flex align-items-center justify-content-center">
                <button className="fw-bold fs-4 position-absolute start-0 m-2 border-0 bg-transparent" onClick={handleOpenNumberAuth}>&lt;</button>
                <h1 className="text-center fs-5">Confirme seu número</h1>
            </header>
            <main className="mt-5 container d-flex flex-column">
                <p>Insira o codigo que enviamos por SMS para {num}:</p>
                <input type="text" className="col-6 py-2 border-2 border-dark rounded-3 mx-auto" placeholder="- - - - - -"/>
                <p className="mt-4 mx-auto">Não recebeu o código? <span><a href="" className="text-dark">Mais opções</a></span></p>
                <button className="btn btn-dark my-4 col-10 mx-auto">Continuar</button>
                <a href="" className="text-dark mt-5 mx-auto">Precisa de ajuda?</a>
            </main>
        </div>
    )
}