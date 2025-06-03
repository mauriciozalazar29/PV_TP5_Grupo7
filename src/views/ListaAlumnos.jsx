import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ListaAlumnos = ({ alumnos, onEliminar }) => {
  const location = useLocation()
  const mensajeInicial = location.state?.mensaje || ''
  const [mensaje, setMensaje] = useState(mensajeInicial)
  const [idAEliminar, setIdAEliminar] = useState(null)

  useEffect(() => {
    if (mensajeInicial) {
      window.history.replaceState({}, document.title)
      setMensaje(mensajeInicial)
      const timer = setTimeout(() => setMensaje(''), 2000)
      return () => clearTimeout(timer)
    }
  }, [mensajeInicial])


  const confirmarEliminacion = () => {
    onEliminar(idAEliminar)
    setMensaje('Alumno eliminado correctamente.')
    setIdAEliminar(null)

    // Limpia el mensaje después de 2 segundos
    setTimeout(() => setMensaje(''), 2000)
  }

  const cancelarEliminacion = () => {
    setIdAEliminar(null)
  }

  return (
    <div className="card border-primary shadow-sm">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h4 className="mb-0">
          <i className="bi bi-list-ul me-2"></i>
          Lista de Alumnos
        </h4>
        <Link to="/alumnos/nuevo" className="btn btn-light btn-sm">
          <i className="bi bi-plus-lg me-1"></i>
        </Link>
      </div>
      <div className="card-body">
        {mensaje && (
          <div className="alert alert-success" role="alert">
            <i className="bi bi-check-circle-fill me-2"></i>
            {mensaje}
          </div>
        )}
        {alumnos.length === 0 ? (
          <div className="alert alert-info text-center">
            <i className="bi bi-info-circle-fill me-2"></i>
            No hay alumnos registrados
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>LU</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Curso</th>
                  <th className="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {alumnos.map((alumno) => (
                  <tr key={alumno.id}>
                    <td className="fw-bold">{alumno.id}</td>
                    <td>{alumno.nombre}</td>
                    <td>{alumno.apellido}</td>
                    <td><span>{alumno.curso}</span></td>
                    <td className="text-end">
                      {idAEliminar === alumno.id ? (
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-sm btn-danger" onClick={confirmarEliminacion}>
                            Confirmar
                          </button>
                          <button className="btn btn-sm btn-secondary" onClick={cancelarEliminacion}>
                            Cancelar
                          </button>
                        </div>
                      ) : (
                        <div className="d-flex gap-2 justify-content-end">
                          <Link to={`/alumnos/${alumno.id}`} className="btn btn-sm btn-outline-primary" title="Ver">
                            <i className="bi bi-eye-fill"></i>
                          </Link>
                          <Link to={`/alumnos/${alumno.id}/editar`} className="btn btn-sm btn-outline-dark" title="Editar">
                            <i className="bi bi-pencil-fill"></i>
                          </Link>
                          <button onClick={() => setIdAEliminar(alumno.id)} className="btn btn-sm btn-outline-danger" title="Eliminar">
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-end">
              <Link to="/" className="btn btn-outline-secondary">
                <i className="bi bi-house-door me-1"></i> Volver al Inicio
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ListaAlumnos
