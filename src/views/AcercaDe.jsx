import { Link } from 'react-router-dom'

const AcercaDe = () => {
  return (
    <div className="container py-5">
      <div className="card border-0 shadow-lg">
        <div className="card-header bg-gradient text-white py-4" style={{background: 'linear-gradient(135deg, #6c5ce7, #74b9ff)'}}>
          <h4 className="mb-0 text-center">
            <i className="bi bi-info-circle-fill me-2"></i>
            Acerca de EduManager
          </h4>
        </div>
        <div className="card-body p-5">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="mb-4">
                <h5 className="text-primary fw-bold mb-3">
                  <i className="bi bi-bar-chart-line-fill me-2"></i>
                  ¿Qué es EduManager?
                </h5>
                <p className="text-muted lh-lg">
                  <strong className="text-dark">EduManager</strong> es una plataforma digital diseñada para facilitar y optimizar
                  la gestión académica en instituciones educativas. Nuestro objetivo es brindar una solución
                  moderna, accesible y eficaz para el seguimiento integral de alumnos.
                </p>
                <p className="text-muted lh-lg">
                  Desde la carga inicial hasta la actualización de datos, todo el proceso es rápido,
                  intuitivo y seguro. Ideal para escuelas, academias y centros de formación que buscan
                  digitalizar su administración sin complicaciones.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-4">
                <h5 className="text-primary fw-bold mb-3">
                  <i className="bi bi-stars me-2"></i>
                  Beneficios para tu institución
                </h5>
                <div className="list-group list-group-flush">
                  <div className="list-group-item border-0 px-0 py-2">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span className="text-muted">Ahorro de tiempo en la gestión de datos.</span>
                  </div>
                  <div className="list-group-item border-0 px-0 py-2">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span className="text-muted">Acceso rápido a información precisa de cada alumno.</span>
                  </div>
                  <div className="list-group-item border-0 px-0 py-2">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span className="text-muted">Mejora en la organización institucional.</span>
                  </div>
                  <div className="list-group-item border-0 px-0 py-2">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span className="text-muted">Adaptado a dispositivos móviles y de escritorio.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="alert alert-light border-0 shadow-sm mt-5" style={{backgroundColor: '#f8f9ff'}}>
            <div className="d-flex align-items-center">
              <i className="bi bi-code-slash fs-2 me-3 text-primary"></i>
              <div>
                <h6 className="mb-1 text-dark fw-bold">Tecnologías utilizadas</h6>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <span className="badge rounded-pill px-3 py-2" style={{backgroundColor: '#61dafb', color: '#000'}}>React</span>
                  <span className="badge bg-warning rounded-pill px-3 py-2 text-dark">Bootstrap 5</span>
                  <span className="badge bg-success rounded-pill px-3 py-2">Vite</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-8 offset-md-2">
              <div className="mb-4">
                <h5 className="text-primary fw-bold mb-4 text-center">
                  <i className="bi bi-people-fill me-2"></i>
                  Creadores de la Aplicación
                </h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <div className="mb-3">
                          <i className="bi bi-person-circle fs-1 text-primary"></i>
                        </div>
                        <h6 className="mb-2 text-dark">Mauricio Tomas Zalazar</h6>
                        <a 
                          href="https://github.com/mauriciozalazar29" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-decoration-none text-muted small"
                        >
                          <i className="bi bi-github me-1"></i>@mauriciozalazar29
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <div className="mb-3">
                          <i className="bi bi-person-circle fs-1 text-primary"></i>
                        </div>
                        <h6 className="mb-2 text-dark">Mariano Gabriel Gutiérrez</h6>
                        <a 
                          href="https://github.com/marianogutierrez2008" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-decoration-none text-muted small"
                        >
                          <i className="bi bi-github me-1"></i>@marianogutierrez2008
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <Link to="/" className="btn btn-primary btn-lg px-4 py-2 shadow-sm">
              <i className="bi bi-house-door me-2"></i> 
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AcercaDe