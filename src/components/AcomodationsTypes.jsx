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
            img:"https://prints.ultracoloringpages.com/e103a56e1386cc746c78fd0f4291c5bd.png"
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
<<<<<<< HEAD
            <div className="types-carrousel d-flex position-absolute justify-content-between px-1">
                {
                    types.map((type, i) => <button key={i} className="types-item d-flex flex-column align-items-center">
=======
            <div className="types-carrousel d-flex position-absolute justify-content-evenly">
                {
                    types.map(type => <button className="types-item d-flex flex-column align-items-center">
>>>>>>> 72478fc8a5f1e0548d4ec959aa55b671c9f4a4a2
                        <img src={type.img} alt="" className="types-item-img"/>
                        <p>{type.name}</p>
                    </button>)
                }
            </div>
        </div>
    )
}