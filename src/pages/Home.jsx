import AcomodationTypes from "../components/aplication/AcomodationsTypes";
import SearchBar from "../components/aplication/SearchBar";
import AcomodationsFilter from "../components/aplication/AcomodationsFilter";
import Destiny from "../components/aplication/Destiny"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNav, showNav } from "../assets/appSlice";
import { useEffect } from "react";
export default function Home() {
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
    useEffect(() =>{
        dispatch(showNav())
    },[])
    return (
        <div>
            <header className="border-bottom">
                <SearchBar handleOpenDestiny={handleOpenDestiny} handleOpenFilter={handleOpenFilter}/>
                <AcomodationTypes/>
            </header>
            {showDestiny && <Destiny handleOpenDestiny={handleOpenDestiny}/>}
            {showFilter && <AcomodationsFilter handleOpenFilter={handleOpenFilter}/>}
        </div>
    )
}