import AcomodationTypes from "../components/AcomodationsTypes";
import SearchBar from "../components/SearchBar";

export default function Home() {
    return (
        <div>
            <header className="border-bottom">
                <SearchBar />
                <AcomodationTypes/>
            </header>
        </div>
    )
}