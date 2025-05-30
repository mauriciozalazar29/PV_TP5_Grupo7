import { useParams, Link } from 'react-router-dom'

const DetalleAlumno = ({ alumnos }) => {
  const { id } = useParams()
  const alumno = alumnos.find(a => a.id === id)

  if (!alumno) {
    return <div className="alert alert-danger">Alumno no encontrado.</div>
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
        <h4 className="mb-0">
          <i className="bi bi-person-vcard-fill me-2"></i>
          Detalle del Alumno
        </h4>
        <Link to="/alumnos" className="btn btn-outline-light btn-sm">
          <i className="bi bi-arrow-left"></i> Volver
        </Link>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 mb-3">
            <strong>LU:</strong> <span className="ms-2">{alumno.id}</span>
          </div>
          <div className="col-md-6 mb-3">
            <strong>Nombre:</strong> <span className="ms-2">{alumno.nombre}</span>
          </div>
          <div className="col-md-6 mb-3">
            <strong>Apellido:</strong> <span className="ms-2">{alumno.apellido}</span>
          </div>
          <div className="col-md-6 mb-3">
            <strong>Curso:</strong> <span className="ms-2">{alumno.curso}</span>
          </div>
          <div className="col-md-6 mb-3">
            <strong>Email:</strong> <span className="ms-2">{alumno.email}</span>
          </div>
          <div className="col-md-6 mb-3">
            <strong>Domicilio:</strong> <span className="ms-2">{alumno.domicilio}</span>
          </div>
          <div className="col-md-6 mb-3">
            <strong>Teléfono:</strong> <span className="ms-2">{alumno.telefono}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalleAlumno
