import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}