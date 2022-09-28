import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import NotFound from "./pages/NotFound"
import Nav from "./components/aplication/Nav"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import PersonalInfos from "./components/user/PersonalInfos"
import Account from "./pages/Account"
import LoginAndSecurity from "./components/account/LoginAndSecurity"
import Payment from "./components/account/Payment"
import Notification from "./components/account/Notification"
import GlobalPrefer from "./components/account/GlobalPrefer"
import PrivAndShare from "./components/account/PrivAndShare"
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
        <Route path="/profile/account" element={<Account />} />
        <Route path="/profile/account/payment" element={<Payment />} />
        <Route path="/profile/account/notification" element={<Notification />} />
        <Route path="/profile/account/login-and-security" element={<LoginAndSecurity />} />
        <Route path="/profile/account/privacity-and-share" element={<PrivAndShare />} />
        <Route path="/profile/account/global-prefer" element={<GlobalPrefer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}