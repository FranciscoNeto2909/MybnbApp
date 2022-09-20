import { useSelector } from "react-redux"
import Profile from "./Profile"
import Login from "./Login"
export default function User() {
    const isUserLogged = useSelector(data => data.user.isLogged)
    return (
        <>
            {
                isUserLogged ? <Profile /> : <Login/>
            }
        </>
    )
}