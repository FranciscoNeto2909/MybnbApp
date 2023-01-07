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
    const [filtered, SetFiltered] = useState("")
    const [showDestiny, setShowDestiny] = useState(false)
    const [showFilter, setShowFilter] = useState(false)
    const dispatch = useDispatch()
    const filteredAcomodations = acomodation.filter(acmd => acmd.hostEmphasis.includes(filtered))

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
    }, [filtered])
    return (
        <div>
            <header className="home-header container-fluid position-fixed top-0">
                <SearchBar handleOpenDestiny={handleOpenDestiny} handleOpenFilter={handleOpenFilter} />
                <AcomodationTypes filtered={filtered} SetFiltered={SetFiltered} />
            </header>
            {showDestiny && <Destiny handleOpenDestiny={handleOpenDestiny} />}
            {showFilter && <AcomodationsFilter handleOpenFilter={handleOpenFilter} />}
            <main style={{ marginTop:"140px", marginBottom:"65px"}}>
                <div className="cards-container d-flex flex-column justify-content-center align-items-center">
                    {filteredAcomodations && filteredAcomodations.map((host, i) => (
                        <Card host={host} key={i} />
                    ))}
                </div>
            </main>
        </div>
    )
}