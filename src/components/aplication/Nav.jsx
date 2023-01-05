import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserCircle, Heart, MagnifyingGlass } from "phosphor-react"

export default function Nav() {
    const isUserLogged = useSelector(data => data.user.isLogged)
    const routeId = localStorage.getItem("routeId")
    function handleSetButtonEmphasis(e) {
        localStorage.setItem("routeId", e.target.id)
    }

    return (
        <nav className="navbar container-fluid justify-content-center position-fixed bottom-0 bg-light">
            <Link to="/" style={routeId == 1 ? { color: " #f00" } : { color: "#0d6efd" }}
                onClick={handleSetButtonEmphasis} id="1"
                className="font-smaller d-flex flex-column align-items-center text-decoration-none fw-bold"
            >
                <MagnifyingGlass size={25} />
                Explorar
            </Link>
            <Link to="/favorites" style={routeId == 2 ? { color: " #f00" } : { color: "#0d6efd" }}
                onClick={handleSetButtonEmphasis} id="2"
                className="font-smaller d-flex flex-column align-items-center text-decoration-none mx-5  fw-bold"
            >
                <Heart size={25} />
                Favorites
            </Link>
            <Link to={isUserLogged ? "/profile" : "/loginPage"}
                onClick={handleSetButtonEmphasis} id="3" style={routeId == 3 ? { color: " #f00" } : { color: "#0d6efd" }}
                className="font-smaller d-flex flex-column align-items-center text-decoration-none  fw-bold"
            >
                <UserCircle size={25} />
                {isUserLogged ? "Perfil" : "Entrar"}
            </Link>
        </nav>
    )
} 