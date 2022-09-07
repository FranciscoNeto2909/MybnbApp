export default function AcomodationTypes() {
    const types = [
        {
            name:"Praia",
            img:"https://prints.ultracoloringpages.com/841d46dcc996365d7654b4e4fa5a1350.png"
        },
        {
            name:"Piscinas incriveis",
            img:"https://prints.ultracoloringpages.com/733be6c3fa243f757ec78ac738437c6b.png"
        },
        {
            name:"Ilhas",
            img:"https://www.colorironline.com/images/imgcolor/desenho-ilha-deserta-2-para-colorir.jpg"
        },
        {
            name:"Surf",
            img:"https://cdn-icons-png.flaticon.com/512/250/250330.png"
        },
        {
            name:"Parques nacionais",
            img:"https://storyateverycorner.com/wp-content/uploads/2021/01/national-park-icon.png"
        },
        {
            name:"tropical",
            img:"https://prints.ultracoloringpages.com/d61819753059d96901b3e4ea7a2c00ca.png"
        }
    ]
    return(
        <div className="types-container position-relative overflow-hidden">
            <div className="types-carrousel d-flex justify-content-between px-1 mt-2">
                {
                    types.map((type, i) => <button key={i} className="types-item d-flex flex-column align-items-center">
                        <img src={type.img} alt="" className="types-item-img"/>
                        <p className="">{type.name}</p>
                    </button>)
                }
            </div>
        </div>
    )
}