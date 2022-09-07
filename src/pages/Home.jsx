import AcomodationTypes from "../components/AcomodationsTypes";
import SearchBar from "../components/SearchBar";
import AcomodationsFilter from "../components/AcomodationsFilter";
import Destiny from "../components/Destiny"
import { useState } from "react";
export default function Home({showFilter, handleOpenFilter}) {
    const [showDestiny, setShowDestiny] = useState(true)
    function handleOpenDestiny() {
        setShowDestiny(!showDestiny)
    }
    return (
        <div>
            <header className="border-bottom">
                <SearchBar handleOpenFilter={handleOpenFilter} handleOpenDestiny={handleOpenDestiny}/>
                <AcomodationTypes/>
            </header>
            {showDestiny && <Destiny handleOpenDestiny={handleOpenDestiny}/>}
            {showFilter && <AcomodationsFilter handleOpenFilter={handleOpenFilter}/>}
        </div>
    )
}