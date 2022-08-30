import AcomodationTypes from "../components/AcomodationsTypes";
import SearchBar from "../components/SearchBar";
import AcomodationsFilter from "../components/AcomodationsFilter";
import { useState } from "react";
export default function Home() {
    const [opened, setOpened] = useState(true)
    function handleOpenFilter() {
        setOpened(!opened)
    }
    return (
        <div>
            <header className="border-bottom">
                <SearchBar handleOpenFilter={handleOpenFilter}/>
                <AcomodationTypes/>
            </header>
            {opened && <AcomodationsFilter handleOpenFilter={handleOpenFilter}/>}
        </div>
    )
}