import { CaretLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export default function GlobalPrefer() {
    const navigate = useNavigate()
    return(
        <>
            <header>
                <CaretLeft size={30} onClick={() => navigate(-1)}/>
            </header>
        </>
    )
}