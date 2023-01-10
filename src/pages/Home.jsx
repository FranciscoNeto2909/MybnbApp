import React, { useState, useRef, useEffect } from "react";
import AcomodationTypes from "../components/aplication/AcomodationsTypes";
import SearchBar from "../components/aplication/SearchBar";
import AcomodationsFilter from "../components/aplication/AcomodationsFilter";
import Destiny from "../components/aplication/Destiny"
import { useDispatch, useSelector } from "react-redux";
import { clearDestiny, hideNav, showNav } from "../assets/appSlice";
import Card from "../components/aplication/cards/Card";
import { getAcomodations } from "../assets/acomodationSlice"
import { GoogleMap, Marker } from "@react-google-maps/api";

export default function Home() {
    const dispatch = useDispatch()
    const previousTouchRef = useRef({ y: 0 })
    const acomodation = useSelector(data => data.acomodation.acomodation)
    const hasDestiny = useSelector(data => data.app.destiny)
    const [filtered, SetFiltered] = useState("")
    const [showDestiny, setShowDestiny] = useState(false)
    const [filterDestiny, setFilterDestiny] = useState({
        localization: "",
        date: "",
        hosts: 0,
        cordenates: ""
    })
    const [showFilter, setShowFilter] = useState(false)
    const filteredAcomodations = acomodation.filter(acmd => acmd.hostEmphasis.includes(filtered))

    const filteredDestiny = acomodation.filter(acmd =>
        acmd.hostLocalization.includes(filterDestiny.localization) && acmd.hostsQuant >= filterDestiny.hosts
    )

    function handleOpenDestiny() {
        setShowDestiny(!showDestiny)
    }

    function handleOpenFilter() {
        setShowFilter(!showFilter)
        dispatch(hideNav())
    }

    const handleTouchMove = (event) => {
        const touch = event.touches[0]
        const deltaY = touch.clientY - previousTouchRef.current.y
        if (deltaY < -50) {
            dispatch(hideNav())
        }
        if (deltaY > 0) {
            dispatch(showNav())
        }
    }

    const handleTouchStart = (event) => {
        const touch = event.touches[0]
        previousTouchRef.current.x = touch.clientX
        previousTouchRef.current.y = touch.clientY
    }

    useEffect(() => {
        localStorage.setItem("routeId", 1)
        dispatch(showNav())
        dispatch(getAcomodations())
        dispatch(clearDestiny())
    }, [filtered])

    return (
        <div className="home">
            <header className="home-header position-sticky top-0 bg-white">
                <SearchBar handleOpenDestiny={handleOpenDestiny} handleOpenFilter={handleOpenFilter} />
                {!hasDestiny && <AcomodationTypes filtered={filtered} SetFiltered={SetFiltered} />}
                {showDestiny && <Destiny handleOpenDestiny={handleOpenDestiny} setFilterDestiny={setFilterDestiny} />}
                {showFilter && <AcomodationsFilter handleOpenFilter={handleOpenFilter} />}
            </header>
            <main className="home-main" onTouchMove={handleTouchMove} onTouchStart={handleTouchStart}>
                {hasDestiny && filterDestiny.localization &&
                    <div className="map-container" style={{ minHeight: '300px' }}>
                        <GoogleMap
                            mapContainerClassName="destiny-map"
                            options={{ disableDefaultUI: true }}
                            center={{
                                lat: filterDestiny.cordenates.lat,
                                lng: filterDestiny.cordenates.lng
                            }}
                            zoom={15}>
                            <Marker position={{
                                lat: filterDestiny.cordenates.lat,
                                lng: filterDestiny.cordenates.lng
                            }} />
                        </GoogleMap>
                    </div>}
                {!showDestiny &&
                    <div className="cards-container">
                        {hasDestiny ?
                            filteredDestiny.map((host, i) => (
                                <Card host={host} key={i} />
                            )) :
                            filteredAcomodations.map((host, i) => (
                                <Card host={host} key={i} />
                            ))}
                    </div>}
            </main>
        </div>
    )
}