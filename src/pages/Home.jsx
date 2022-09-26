import AcomodationTypes from "../components/aplication/AcomodationsTypes";
import SearchBar from "../components/aplication/SearchBar";
import AcomodationsFilter from "../components/aplication/AcomodationsFilter";
import Destiny from "../components/aplication/Destiny"
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Home() {
    const [showDestiny, setShowDestiny] = useState(false)
    const isNavVisible = useSelector(data => data.app.navVisibility)
    function handleOpenDestiny() {
        setShowDestiny(!showDestiny)
    }
    return (
        <div>
            <header className="border-bottom">
                <SearchBar handleOpenDestiny={handleOpenDestiny}/>
                <AcomodationTypes/>
            </header>
            {showDestiny && <Destiny handleOpenDestiny={handleOpenDestiny}/>}
            {!isNavVisible && <AcomodationsFilter/>}
        </div>
    )
}