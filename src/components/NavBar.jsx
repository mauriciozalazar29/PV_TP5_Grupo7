import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <i className="bi bi-mortarboard-fill fs-4 me-2"></i>
          <span className="fs-5">EduManager</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link d-flex align-items-center ${isActive('/') ? 'active fw-semibold' : ''}`}
                to="/"
              >
                <i className="bi bi-house-door me-2"></i>Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link d-flex align-items-center ${isActive('/alumnos') ? 'active fw-semibold' : ''}`}
                to="/alumnos"
              >
                <i className="bi bi-people-fill me-2"></i>Alumnos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link d-flex align-items-center ${isActive('/alumnos/nuevo') ? 'active fw-semibold' : ''}`}
                to="/alumnos/nuevo"
              >
                <i className="bi bi-person-plus-fill me-2"></i>Nuevo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link d-flex align-items-center ${isActive('/acerca') ? 'active fw-semibold' : ''}`}
                to="/acerca"
              >
                <i className="bi bi-info-circle-fill me-2"></i>Acerca
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
