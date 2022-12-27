import { CaretLeft, CaretRight } from "phosphor-react"
import { useRef } from "react"

export default function Card({ host }) {
  const carroussel = useRef(null)
  function handleNextImage() {
    carroussel.current.scrollLeft += carroussel.current.offsetWidth
  }

  function handlePrevImage() {
    carroussel.current.scrollLeft -= carroussel.current.offsetWidth
  }

  return (
    <div className="card border-0 m-1">
      <div className="card-img-carrossel d-flex position-relative">
        {host.image &&
          <img className="card-img"
            src={`https://mybnb-api.onrender.com/acomodationImages/${host.image}`}
            alt="acomodation" />
        }
      </div>
      <div className="card-body">
        <h5 className="card-title">{host.title}</h5>
        <p className="card-text font-smaller">{host.hostLocalization}</p>
        <p className="card-text"><span className="fw-bold">R${host.price}</span> noite</p>
      </div>
    </div>
  )
}