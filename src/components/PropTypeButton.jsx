export default function PropertyTypeButton({text, setProperty, img}) {
    return (
        <button className="property border border-secondary
        px-3 rounded d-flex flex-column
        align-items-center" onClick={() => setProperty("casa")}>
            <img src={img} alt="casa" className="property-item" />
            {text}
        </button>
    )
}