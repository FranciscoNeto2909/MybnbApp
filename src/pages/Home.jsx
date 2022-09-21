import AcomodationTypes from "../components/AcomodationsTypes";
import SearchBar from "../components/SearchBar";
import AcomodationsFilter from "../components/AcomodationsFilter";
import Destiny from "../components/Destiny"
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