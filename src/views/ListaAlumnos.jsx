import { useState } from 'react'
import { Link } from 'react-router-dom'

const ListaAlumnos = ({ alumnos, onEliminar }) => {
  const [idAEliminar, setIdAEliminar] = useState(null)

  const confirmarEliminacion = () => {
    onEliminar(idAEliminar)
    setIdAEliminar(null)
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
          <i className="bi bi-plus-lg me-1"></i> Nuevo
        </Link>
      </div>
      <div className="card-body">
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
                    <td>
                      <span className="badge bg-info text-dark">{alumno.curso}</span>
                    </td>
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
                          <Link to={`/alumnos/${alumno.id}`} className="btn btn-sm btn-outline-info" title="Ver detalles">
                            <i className="bi bi-eye-fill"></i>
                          </Link>
                          <Link to={`/alumnos/${alumno.id}/editar`} className="btn btn-sm btn-outline-warning" title="Editar">
                            <i className="bi bi-pencil-fill"></i>
                          </Link>
                          <button
                            onClick={() => setIdAEliminar(alumno.id)}
                            className="btn btn-sm btn-outline-danger"
                            title="Eliminar"
                          >
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default ListaAlumnos
