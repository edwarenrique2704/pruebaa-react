import { Footer } from '../components/Footer'
import { NavLink } from 'react-router-dom'



export const HomePage = () => {
  return (
    <>
      <div className="lgo">
        <NavLink to="/movies" className="nav-link active" aria-current="page">
          <img className="logo"
            src="/src/assets/images/placeholder.png"
            alt="Logo de Instagram"
          />
          <p className="tittle">Movies</p>
        </NavLink>
        <NavLink to="/series" className="nav-link active" aria-current="page">
          <img className="logo"
            src="/src/assets/images/placeholder.png"
            alt="Logo de Instagram"
          />
          <p className="tittle">Series</p>
        </NavLink>

      </div>
      <Footer />
    </>
  )
}
