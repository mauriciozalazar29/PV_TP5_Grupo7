import { Link } from 'react-router-dom'
import escuela1 from '../assets/escuela1.jpg'

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">

      <header className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">
            <i className="bi bi-mortarboard-fill me-2"></i>
            EduManager
          </h1>
          <p className="lead fs-4 mb-4">
            Optimizá la administración académica de tu institución con una plataforma ágil y confiable
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/alumnos" className="btn btn-light btn-lg px-4 me-sm-3">
              <i className="bi bi-people-fill me-2"></i>
              Ver Alumnos
            </Link>
            <Link to="/alumnos/nuevo" className="btn btn-outline-light btn-lg px-4">
              <i className="bi bi-plus-circle me-2"></i>
              Registrar Alumno
            </Link>
          </div>
        </div>
      </header>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-semibold">¿Por qué elegir EduManager?</h2>
          <div className="row g-4 row-cols-1 row-cols-md-3 text-center">
            <div className="col">
              <div className="p-4 border rounded h-100 bg-white shadow-sm">
                <i className="bi bi-globe2 fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Accesibilidad Total</h5>
                <p>Gestioná desde cualquier lugar, con acceso remoto seguro y sin complicaciones.</p>
              </div>
            </div>
            <div className="col">
              <div className="p-4 border rounded h-100 bg-white shadow-sm">
                <i className="bi bi-speedometer2 fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Procesos Eficientes</h5>
                <p>Automatizá tareas y reducí tiempos administrativos hasta un 40%.</p>
              </div>
            </div>
            <div className="col">
              <div className="p-4 border rounded h-100 bg-white shadow-sm">
                <i className="bi bi-shield-lock fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Privacidad y Seguridad</h5>
                <p>Protección de datos bajo estándares actuales para cuidar tu institución.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-5">
        <div className="container">
          <h2 className="text-center fw-semibold mb-5">Creado para instituciones que buscan profesionalismo</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">

             <img
                src={escuela1}
                alt="Institución educativa"
                className="img-fluid rounded shadow"
              />

            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Digitalización completa de la gestión de alumnos
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Plataforma responsiva y moderna
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Visualización rápida y clara de datos importantes
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Intuitivo para cualquier usuario: directivos, docentes o administrativos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="mb-4">Impulsá tu institución al siguiente nivel</h2>
          <p className="lead mb-4">
           Comenzá a usar EduManager y descubrí una forma más simple y eficiente de gestionar tu institución educativa.
          </p>
          <Link to="/alumnos/nuevo" className="btn btn-light btn-lg px-4 shadow">
            <i className="bi bi-rocket-takeoff-fill me-2"></i>
            Empezar ahora
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
