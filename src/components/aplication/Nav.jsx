import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserCircle, Heart, MagnifyingGlass } from "phosphor-react"
import { useState } from "react";

export default function Nav() {
    const isUserLogged = useSelector(data => data.user.isLogged)

    return (
        <nav className="navbar container-fluid justify-content-center position-fixed bottom-0 bg-light">
            <Link to="/"
                onClick={e => localStorage.setItem("routeId",e.target.id)} id="1"
                className={localStorage.getItem("routeId") == 1 ?
                    "text-danger font-smaller d-flex flex-column align-items-center text-decoration-none fw-bold" :
                    "font-smaller d-flex flex-column align-items-center text-decoration-none  fw-bold"
                }
            >
                <MagnifyingGlass size={25} />
                Explorar
            </Link>
            <Link to="/favorites"
                onClick={e => localStorage.setItem("routeId",e.target.id)} id="2"
                className={localStorage.getItem("routeId") == 2 ?
                    "text-danger font-smaller d-flex flex-column align-items-center text-decoration-none mx-5  fw-bold" :
                    "font-smaller d-flex flex-column align-items-center text-decoration-none mx-5  fw-bold"
                }
            >
                <Heart size={25} />
                Favorites
            </Link>
            <Link to={isUserLogged ? "/profile" : "/loginPage"}
                onClick={e =>localStorage.setItem("routeId",e.target.id)} id="3"
                className={localStorage.getItem("routeId") == 3 ?
                    "text-danger font-smaller d-flex flex-column align-items-center text-decoration-none  fw-bold" :
                    "font-smaller d-flex flex-column align-items-center text-decoration-none  fw-bold"
                }
            >
                <UserCircle size={25} />
                {isUserLogged ? "Perfil" : "Entrar"}
            </Link>
        </nav>
    )
} 