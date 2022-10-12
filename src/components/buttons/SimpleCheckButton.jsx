export default function SimpleCheckButton({ text, func, value }) {
    return (
        <div className="container d-flex justify-content-between">
            <label className="form-check-label" htmlFor="espaco">{text}</label>
            <input className="form-check-input border-secondary " type="checkbox" value={value} id="espaco" onClick={(e) => { func(e.target.value)}} />
        </div>
    )
}