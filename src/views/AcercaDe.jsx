const AcercaDe = () => {
  return (
    <div className="card border-secondary shadow-sm">
      <div className="card-header bg-secondary text-white">
        <h4 className="mb-0">
          <i className="bi bi-info-circle-fill me-2"></i>
          Acerca de la Aplicación
        </h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-4">
              <h5 className="text-secondary">
                <i className="bi bi-book me-2"></i>
                Descripción del Proyecto
              </h5>
              <p>
                Esta aplicación fue desarrollada como parte del Trabajo Práctico N° 5
                de la materia <strong>Programación Visual</strong> de la carrera Analista Programador Universitario
                en la Facultad de Ingeniería.
              </p>
              <p>
                Permite gestionar información de alumnos: agregar, editar, eliminar y visualizar
                detalles, utilizando React, React Router DOM y Bootstrap.
              </p>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="mb-4">
              <h5 className="text-secondary">
                <i className="bi bi-people-fill me-2"></i>
                Integrantes del Grupo
              </h5>
              <div className="list-group">
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Mauricio Tomas Zalazar</h6>
                    <small>
                      <a 
                        href="https://github.com/mauriciozalazar29" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <i className="bi bi-github me-1"></i>@mauriciozalazar29
                      </a>
                    </small>
                  </div>
                </div>
                
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Mariano Gabriel Gutiérrez</h6>
                    <small>
                      <a 
                        href="https://github.com/marianogutierrez2008" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <i className="bi bi-github me-1"></i>@marianogutierrez2008
                      </a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="alert alert-light mt-4">
          <div className="d-flex align-items-center">
            <i className="bi bi-code-slash fs-3 me-3 text-secondary"></i>
            <div>
              <h6 className="mb-1">Tecnologías utilizadas</h6>
              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="badge bg-primary">React</span>
                <span className="badge bg-info text-dark">React Router</span>
                <span className="badge bg-warning text-dark">Bootstrap</span>
                <span className="badge bg-success">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcercaDe
