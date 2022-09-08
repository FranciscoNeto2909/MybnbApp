import Registration from "../components/Registration"
import NumberAuth from "../components/NumberAuth"
import { useState } from "react"
export default function Login() {
    const [auth, setAuth] = useState(false)
    const [phone, setPhone] = useState("")
    function handleOpenNumberAuth() {
        setAuth(!auth)
    }
    return (
        <>
            {!auth ?
                <Registration phone={phone} setPhone={setPhone} handleOpenNumberAuth={handleOpenNumberAuth} /> :
                <NumberAuth phone={phone} handleOpenNumberAuth={handleOpenNumberAuth}/>}
        </>
    )
}