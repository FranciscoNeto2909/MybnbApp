import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import PersonalInfos from "./components/user/PersonalInfos"
export default function App() {
  const [showFilter, setShowFilter] = useState(false)
  function handleOpenFilter() {
    setShowFilter(!showFilter)
  }
  return (
    <div className="App">
      {!showFilter && <Nav />}
      <Routes>
        <Route path="/" element={<Home showFilter={showFilter} handleOpenFilter={handleOpenFilter} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/personal-infos" element={<PersonalInfos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}