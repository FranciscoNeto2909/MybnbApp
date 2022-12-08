import React from "react";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
    const navigate = useNavigate()

    function handleRedirect() {
        setTimeout(() => {
            navigate("/")
        }, 2000);
    }
    handleRedirect()

    return (
        <div className="border border-secondary position-absolute top-50 start-50 translate-middle p-5 rounded-3">
            <h3 className="fw-bold">Page not Found!</h3>
        </div>
    )
}