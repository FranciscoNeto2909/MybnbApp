import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { CaretLeft, CaretRight } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import { showNav } from "../../assets/appSlice"
import { useState } from "react"
import AcomodationInfo from "./AcomodationInfo"
import { serverUrl } from "../../assets/api"

export default function UserAcomodations() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [acomodationIndex, setAcomodationIndex] = useState("")
    const [acomodationResumeVisib, setAcomodationResumeVisib] = useState(false)

    const user = useSelector(data => data.user)
    const userAcomodations = useSelector(data => data.acomodation.acomodation.filter(acmd => acmd.hostName == user.user.name))
    function handleBackButton() {
        navigate(-1)
        dispatch(showNav())
    }
    function handleOpenAcomodationResume(index) {
        setAcomodationIndex(index)
        setAcomodationResumeVisib(true)
    }
    function handleCloseResume() {
        setAcomodationResumeVisib(false)
    }
    return (
        <>
            <header className="account-header py-3 position-sticky top-0 bg-light">
                <CaretLeft size={25} onClick={!acomodationResumeVisib ? handleBackButton : handleCloseResume} />
            </header>
            <main>
                {!acomodationResumeVisib ?
                    <div className="user-acomodations d-flex flex-column mx-2 mt-3">
                        {
                            userAcomodations.map((acomodation, i) => (
                                <button key={i} className="py-4 border position-relative d-flex align-items-center justify-content-between bg-transparent border-0" onClick={() => handleOpenAcomodationResume(i)}>
                                    <img src={`${serverUrl}acomodationImages/${acomodation.images && acomodation.images.split(",")[0]}`} className="rounded" style={{ height: "50px" }} alt="" />
                                    {acomodation.title}
                                    <CaretRight size={30} />
                                </button>
                            ))
                        }
                    </div> : <AcomodationInfo acomodation={userAcomodations[acomodationIndex]} handleCloseResume={handleCloseResume} />
                }
            </main>
        </>
    )
}