import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
export default function App() {
  const [showFilter, setShowFilter] = useState(false)
  function handleOpenFilter() {
      setShowFilter(!showFilter)
  }
  return (
    <div className="App">
      {!showFilter && <Nav/>}
      <Routes>
        <Route path="/" element={<Home showFilter={showFilter} handleOpenFilter={handleOpenFilter} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}