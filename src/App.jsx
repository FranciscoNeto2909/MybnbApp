import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
export default function App() {
  const [opened, setOpened] = useState(true)
  function handleOpenFilter() {
      setOpened(!opened)
  }
  return (
    <div className="App">
      {!opened && <Nav/>}
      <Routes>
        <Route path="/" element={<Home opened={opened} handleOpenFilter={handleOpenFilter} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}