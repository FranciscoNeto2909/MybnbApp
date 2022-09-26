export default function SwitchButton({ text, text2, func }) {
    return (
        <div className="d-flex flex-column justify-content-between form-switch p-3 position-relative">
            <label className="form-check-label fs-5 " htmlFor="switch-btn">{text}</label>
            {text2 !== undefined &&
                <p className="text-secondary">{text2}</p>
            }
            <input className="form-check-input position-absolute end-0" type="checkbox" id="switch-btn" onClick={func} />
        </div>
    )
}