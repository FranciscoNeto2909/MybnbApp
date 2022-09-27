import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserCircle, Heart, MagnifyingGlass } from "phosphor-react"
export default function Nav() {
    const isUserLogged = useSelector(data => data.user.isLogged)
    return (
        <nav className="navbar container-fluid justify-content-center position-fixed bottom-0 border-secondary bg-light">
            <Link to="/" className="font-smaller d-flex flex-column align-items-center text-decoration-none">
                <MagnifyingGlass size={25} />
                Explorar
            </Link>
            <Link to="/favorites" className="font-smaller d-flex flex-column align-items-center text-decoration-none mx-5">
                <Heart size={25} />
                Favorites
            </Link>
            <Link to={isUserLogged ? "/profile" : "/login"} className="font-smaller d-flex flex-column align-items-center text-decoration-none">
                <UserCircle size={25} />
                {isUserLogged ? "Perfil" : "Entrar"}
            </Link>
        </nav>
    )
} 