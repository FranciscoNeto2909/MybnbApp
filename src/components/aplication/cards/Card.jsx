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
    <div className="card border-0 m-1 mt-4">
        {host.image &&
          <img className="card-img" style={{height:"340px"}}
            src={`https://mybnb-api.onrender.com/acomodationImage/${host.image}`}
            alt="acomodation" />
        }
      <div className="card-body">
        <h5 className="card-title">{host.title}</h5>
        <p className="card-text font-smaller">{host.hostLocalization}</p>
        <p className="card-text"><span className="fw-bold">R${host.price}</span> noite</p>
      </div>
    </div>
  )
}