import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar container-fluid justify-content-center position-fixed bottom-0 border-secondary bg-light">
                <Link to="/" className="d-flex flex-column align-items-center text-decoration-none">
                    <img className="icon" src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png" alt="lupa" />
                    Explorar
                </Link>
            <Link to="/favorites" className="d-flex flex-column align-items-center text-decoration-none mx-5">
                <img className="icon" src="https://freepngimg.com/thumb/instagram/1-2-instagram-heart-transparent.png" alt="coração" />
                Favorites
            </Link>
            <Link to="/login" className="d-flex flex-column align-items-center text-decoration-none">
                <img className="icon" src="https://distrimar.s3.amazonaws.com/static/apm/img/misc/default_user.png" alt="user" />
                Entrar
            </Link>
        </nav>
    )
}