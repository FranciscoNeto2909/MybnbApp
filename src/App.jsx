import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import PersonalInfos from "./components/user/PersonalInfos"
import { useSelector } from "react-redux"
export default function App() {
  const [showFilter, setShowFilter] = useState(false)
  const isNavVisible = useSelector(data => data.app.navVisibility)
  function handleOpenFilter() {
    setShowFilter(!showFilter)
  }
  return (
    <div className="App">
      {isNavVisible && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/personal-infos" element={<PersonalInfos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}