export default function SwitchButton({ text, text2, func }) {
    return (
        <div className="d-flex flex-column justify-content-between form-switch p-3 ps-0 position-relative">
            <label className="form-check-label fs-5" htmlFor="switch-btn">{text}</label>
            {text2 !== undefined &&
                <p className="font-smaller text-secondary">{text2}</p>
            }
            <input className="translate-switch form-check-input position-absolute end-0 p-2 mt-2" type="checkbox" id="switch-btn" onClick={func} />
        </div>
    )
}