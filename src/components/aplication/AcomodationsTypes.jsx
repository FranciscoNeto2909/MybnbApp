import { useState } from "react"

export default function AcomodationTypes({ filtered, SetFiltered }) {
    const [selected, setSelected] = useState(null)
    const types = [
        {
            name: "Praia",
            img: "https://prints.ultracoloringpages.com/841d46dcc996365d7654b4e4fa5a1350.png"
        },
        {
            name: "Piscinas incriveis",
            img: "https://prints.ultracoloringpages.com/733be6c3fa243f757ec78ac738437c6b.png"
        },
        {
            name: "Ilhas",
            img: "https://www.colorironline.com/images/imgcolor/desenho-ilha-deserta-2-para-colorir.jpg"
        },
        {
            name: "Surf",
            img: "https://cdn-icons-png.flaticon.com/512/250/250330.png"
        },
        {
            name: "Parques nacionais",
            img: "https://storyateverycorner.com/wp-content/uploads/2021/01/national-park-icon.png"
        },
        {
            name: "Tropical",
            img: "https://prints.ultracoloringpages.com/d61819753059d96901b3e4ea7a2c00ca.png"
        }
    ]

    function handleFilterAcomodations(e) {
        if (selected == e.target.id) {
            setSelected(null)
            SetFiltered("")
        } else {
            setSelected(e.target.id)
            SetFiltered(e.target.value)
        }
    }
    return (
        <div className="types-container position-relative overflow-hidden">
            <div className="types-carroussel d-flex justify-content-between">
                {
                    types.map((type, i) => <label htmlFor={`button${i}`} key={i} className={selected == `button${i}` ? "types-item d-flex flex-column align-items-center border-dark border-bottom mx-3 px-2" : "types-item d-flex flex-column align-items-center mx-3 px-2"}>
                        <input id={`button${i}`} type="button" className="d-none" value={type.name} onClick={e => handleFilterAcomodations(e)} />
                        <img src={type.img} alt="" className="types-item-img" />
                        <p>{type.name}</p>
                    </label>)
                }
            </div>
        </div>
    )
}