import React, { useEffect } from "react"
import { Routes, Route, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import NotFound from "./pages/NotFound"
import Nav from "./components/aplication/Nav"
import Profile from "./pages/Profile"
import LoginPage from "./pages/Login"
import PersonalInfos from "./components/user/PersonalInfos"
import Login from "./components/login/Login"
import Account from "./pages/Account"
import LoginAndSecurity from "./components/account/LoginAndSecurity"
import Payment from "./components/account/Payment"
import Notification from "./components/account/Notification"
import GlobalPrefer from "./components/account/GlobalPrefer"
import PrivAndShare from "./components/account/PrivAndShare"
import AcomodationHost from "./pages/AcomodationHost"
import { getUser } from "./assets/userSlice"

export default function App() {
  const isNavVisible = useSelector(data => data.app.navVisibility)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const id = localStorage.getItem('userId')

  useEffect(() => {
    navigate("/")
    if (token !== null && id !== null) {
      dispatch(getUser(id))
    }
  }, [])

  return (
    <div className="App">
      {isNavVisible && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/personal-infos" element={<PersonalInfos />} />
        <Route path="/profile/account" element={<Account />} />
        <Route path="/profile/account/payment" element={<Payment />} />
        <Route path="/profile/account/notification" element={<Notification />} />
        <Route path="/profile/account/login-and-security" element={<LoginAndSecurity />} />
        <Route path="/profile/account/privacity-and-share" element={<PrivAndShare />} />
        <Route path="/profile/account/global-prefer" element={<GlobalPrefer />} />
        <Route path="/profile/acomodation-host" element={<AcomodationHost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}