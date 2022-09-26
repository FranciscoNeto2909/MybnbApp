export default function CompostCheckButton({ text1, text2, value, func }) {
    return (
        <div className="form-check container d-flex justify-content-between">
            <label className="form-check-label" htmlFor="espaco">{text1} 
            <br/><span className="text-secondary">{text2}</span>
            </label>
            <input className="form-check-input border-secondary p-2" type="checkbox" value={value} id="espaco" onClick={e => func(e.target.value)}/>
        </div>
    )
}