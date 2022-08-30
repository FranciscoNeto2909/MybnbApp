import AcomodationTypes from "../components/AcomodationsTypes";
import SearchBar from "../components/SearchBar";
import AcomodationsFilter from "../components/AcomodationsFilter";
export default function Home({opened, handleOpenFilter}) {
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