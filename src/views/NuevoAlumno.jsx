import { useState } from 'react'

const NuevoAlumno = ({ alumnos, setAlumnos, navigate }) => {
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    setMensaje('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación básica
    if (!form.id || !form.nombre || !form.apellido) {
      setMensaje('Por favor complete al menos LU, nombre y apellido')
      return
    }

    // Verificar si ya existe un alumno con el mismo LU
    if (alumnos.some(a => a.id === form.id)) {
      setMensaje('Ya existe un alumno con ese LU')
      return
    }

    // Agregar al array
    setAlumnos([...alumnos, form])

    // Redirigir al listado
    navigate('/alumnos')
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-success text-white">
        <h4 className="mb-0">Agregar Nuevo Alumno</h4>
      </div>
      <div className="card-body">
        {mensaje && <div className="alert alert-warning">{mensaje}</div>}

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">LU</label>
              <input type="text" name="id" className="form-control" value={form.id} onChange={handleChange} required />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Nombre</label>
              <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={handleChange} required />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Apellido</label>
              <input type="text" name="apellido" className="form-control" value={form.apellido} onChange={handleChange} required />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Curso</label>
              <input type="text" name="curso" className="form-control" value={form.curso} onChange={handleChange} />
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
          </div>

          <button type="submit" className="btn btn-primary">Guardar Alumno</button>
        </form>
      </div>
    </div>
  )
}

export default NuevoAlumno
