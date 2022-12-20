import AcomodationTypes from "../components/aplication/AcomodationsTypes";
import SearchBar from "../components/aplication/SearchBar";
import AcomodationsFilter from "../components/aplication/AcomodationsFilter";
import Destiny from "../components/aplication/Destiny"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNav, showNav } from "../assets/appSlice";
import { useEffect } from "react";
import Card from "../components/aplication/cards/Card";
import { getAcomodations } from "../assets/acomodationSlice"

export default function Home() {
    const acomodation = useSelector(data => data.acomodation.acomodation)

    const [showDestiny, setShowDestiny] = useState(false)
    const [showFilter, setShowFilter] = useState(false)
    const dispatch = useDispatch()

    function handleOpenDestiny() {
        setShowDestiny(!showDestiny)
    }

    function handleOpenFilter() {
        setShowFilter(!showFilter)
        dispatch(hideNav())
    }

    useEffect(() => {
        localStorage.setItem("routeId", 1)
        dispatch(showNav())
        dispatch(getAcomodations())
    }, [])

    return (
        <div>
            <header className="home-header border-bottom position-fixed top-0">
                <SearchBar handleOpenDestiny={handleOpenDestiny} handleOpenFilter={handleOpenFilter} />
                <AcomodationTypes />
            </header>
            {showDestiny && <Destiny handleOpenDestiny={handleOpenDestiny} />}
            {showFilter && <AcomodationsFilter handleOpenFilter={handleOpenFilter} />}
            <main style={{ marginTop:"130px"}}>
                <div className="cards-container d-flex flex-column justify-content-center align-items-center">
                    {acomodation.length > 0 && acomodation.map((host, i) => (
                        <Card host={host} key={i} />
                    ))}
                </div>
            </main>
        </div>
    )
}