import { Link } from 'react-router-dom'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">
        <i className="bi bi-people-fill me-2"></i>
        BRManager
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="bi bi-house-door me-1"></i> Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alumnos">
              <i className="bi bi-list-ul me-1"></i> Lista de Alumnos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alumnos/nuevo">
              <i className="bi bi-person-plus me-1"></i> Nuevo Alumno
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/acerca">
              <i className="bi bi-info-circle me-1"></i> Acerca de
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default NavBar