import { CaretLeft, CaretRight } from "phosphor-react"
import { useRef } from "react"

export default function Card({ host }) {
  const carroussel = useRef(null)
  const acomodationImages = host.images?.split(",")
  
  function handleNextImage() {
    carroussel.current.scrollLeft += carroussel.current.offsetWidth
  }

  function handlePrevImage() {
    carroussel.current.scrollLeft -= carroussel.current.offsetWidth
  }

  return (
    <div className="card border-0 m-1 mt-4">
      <div className="card-img-carrossel d-flex position-relative">
        <CaretLeft size={32} onClick={handlePrevImage} className="text-light position-absolute top-50" />
        <div className="card-img-container d-flex" ref={carroussel}>
          {acomodationImages && acomodationImages.map((img, i) => (
            <img className="card-img"
              src={`https://mybnb-api.onrender.com/acomodationImages/${img}`}
              key={i} alt="acomodation" />
          ))}
        </div>
        <CaretRight size={32} onClick={handleNextImage} className="text-light position-absolute top-50 end-0" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{host.title}</h5>
        <p className="card-text font-smaller">{host.hostLocalization}</p>
        <p className="card-text"><span className="fw-bold">R${host.price}</span> noite</p>
      </div>
    </div>
  )
}