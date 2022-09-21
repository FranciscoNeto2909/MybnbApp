import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserCircle, Heart, MagnifyingGlass } from "phosphor-react"
export default function Nav() {
    const isUserLogged = useSelector(data => data.user.isLogged)
    return (
        <nav className="navbar container-fluid justify-content-center position-fixed bottom-0 border-secondary bg-light">
            <Link to="/" className="d-flex flex-column align-items-center text-decoration-none">
                <MagnifyingGlass size={30} />
                Explorar
            </Link>
            <Link to="/favorites" className="d-flex flex-column align-items-center text-decoration-none mx-5">
                <Heart size={30} />
                Favorites
            </Link>
            <Link to={isUserLogged ? "/profile" : "/login"} className="d-flex flex-column align-items-center text-decoration-none">
                <UserCircle size={30} />
                {isUserLogged ? "Perfil" : "Entrar"}
            </Link>
        </nav>
    )
} 