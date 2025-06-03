import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const EditarAlumno = ({ alumnos, setAlumnos, navigate }) => {
  const { id } = useParams()
  const alumnoOriginal = alumnos.find(a => a.id === id)

  const [form, setForm] = useState({
    id: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '',
  })

  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    if (alumnoOriginal) {
      setForm(alumnoOriginal)
    }
  }, [alumnoOriginal])

  if (!alumnoOriginal) {
    return <div className="alert alert-danger">Alumno no encontrado.</div>
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    setMensaje('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.nombre || !form.apellido) {
      setMensaje('Los campos Nombre y Apellido son obligatorios.')
      return
    }

    // Valida que no exista otro alumno con el mismo ID
    const existeOtroConMismoId = alumnos.some(
      (a) => a.id === form.id && a.id !== id
    )

    if (existeOtroConMismoId) {
      setMensaje('Ya existe otro alumno con ese LU.')
      return
    }

    setAlumnos(
      alumnos.map(a => (a.id === id ? form : a))
    )

   navigate('/alumnos', { state: { mensaje: 'Alumno editado correctamente.' } })
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h4 className="mb-0">
          <i className="bi bi-pencil-square me-2"></i>
          Editar Alumno
        </h4>
      </div>
      <div className="card-body">
        {mensaje && <div className="alert alert-warning">{mensaje}</div>}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">LU</label>
              <input type="text" name="id" className="form-control" value={form.id} onChange={handleChange} />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Nombre</label>
              <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={handleChange} />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Apellido</label>
              <input type="text" name="apellido" className="form-control" value={form.apellido} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Curso</label>
              <select
                name="curso"
                className="form-select"
                value={form.curso}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar curso</option>
                <option value="Primero">Primero</option>
                <option value="Segundo">Segundo</option>
                <option value="Tercero">Tercero</option>
                <option value="Cuarto">Cuarto</option>
                <option value="Quinto">Quinto</option>
              </select>
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Domicilio</label>
              <input type="text" name="domicilio" className="form-control" value={form.domicilio} onChange={handleChange} />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Teléfono</label>
              <input type="text" name="telefono" className="form-control" value={form.telefono} onChange={handleChange} />
            </div>
             <div className="d-flex justify-content-end gap-4 mt-4">
              <Link to="/alumnos" className="btn btn-secondary">
                <i className="bi bi-arrow-left me-1.5" title="Cancelar"></i>
              </Link>
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-check-circle-fill me-1.5"  title="Guardar Cambios"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditarAlumno
