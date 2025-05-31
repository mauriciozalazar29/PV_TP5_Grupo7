import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-primary text-white py-5">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3">
            <i className="bi bi-mortarboard-fill me-2"></i>
            EduManager
          </h1>
          <p className="lead fs-4 mb-4">Una solución moderna para instituciones educativas</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/alumnos" className="btn btn-light btn-lg px-4 me-sm-3">
              <i className="bi bi-people-fill me-2"></i>
              Ver Alumnos
            </Link>
            <Link to="/alumnos/nuevo" className="btn btn-outline-light btn-lg px-4">
              <i className="bi bi-plus-circle me-2"></i>
              Nuevo Alumno
            </Link>
          </div>
        </div>
      </header>
      <section className="py-5 bg-light">
        <div className="container px-4 py-5">
          <h2 className="text-center mb-5">Nuestro Sistema de Gestión</h2>
          
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-primary bg-gradient text-white flex-shrink-0 me-3 p-2 rounded">
                <i className="bi bi-person-lines-fill fs-3"></i>
              </div>
              <div>
                <h3>Gestión Integral</h3>
                <p>Administra toda la información de tus alumnos en un solo lugar, de manera segura y organizada.</p>
              </div>
            </div>
            
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-primary bg-gradient text-white flex-shrink-0 me-3 p-2 rounded">
                <i className="bi bi-speedometer2 fs-3"></i>
              </div>
              <div>
                <h3>Tecnología Moderna</h3>
                <p>Desarrollado con React y Bootstrap para ofrecer una experiencia de usuario fluida y responsiva.</p>
              </div>
            </div>
            
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-primary bg-gradient text-white flex-shrink-0 me-3 p-2 rounded">
                <i className="bi bi-shield-lock fs-3"></i>
              </div>
              <div>
                <h3>Seguridad Garantizada</h3>
                <p>Protegemos los datos de tus alumnos con los más altos estándares de seguridad informática.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="display-5 fw-bold text-primary">100%</div>
              <div className="text-muted">Confiable</div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="display-5 fw-bold text-primary">24/7</div>
              <div className="text-muted">Disponible</div>
            </div>
            <div className="col-md-4">
              <div className="display-5 fw-bold text-primary">5+</div>
              <div className="text-muted">Años de experiencia</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">¿Listo para optimizar tu institución educativa?</h2>
          <p className="lead mb-4">Comienza ahora a gestionar tus alumnos de manera eficiente y profesional.</p>
          <Link to="/alumnos/nuevo" className="btn btn-light btn-lg px-4">
            <i className="bi bi-plus-circle me-2"></i>
            Registrar Primer Alumno
          </Link>
        </div>
      </section>  
    </div>
  )
}

export default Home