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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación básica
    if (!form.id || !form.nombre || !form.apellido) {
      alert('Por favor complete al menos LU, nombre y apellido')
      return
    }

    // Verificar si ya existe un alumno con el mismo LU
    if (alumnos.some(a => a.id === form.id)) {
      alert('Ya existe un alumno con ese LU')
      return
    }

    // Agregar al array
    setAlumnos([...alumnos, form])

    // Redirigir al listado
    navigate('/alumnos')
  }

  return (
    <div>
      <h2>Agregar Nuevo Alumno</h2>
      <form onSubmit={handleSubmit}>
        <label>
          LU:
          <input type="text" name="id" value={form.id} onChange={handleChange} required />
        </label><br />
        <label>
          Nombre:
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
        </label><br />
        <label>
          Apellido:
          <input type="text" name="apellido" value={form.apellido} onChange={handleChange} required />
        </label><br />
        <label>
          Curso:
          <input type="text" name="curso" value={form.curso} onChange={handleChange} />
        </label><br />
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label><br />
        <label>
          Domicilio:
          <input type="text" name="domicilio" value={form.domicilio} onChange={handleChange} />
        </label><br />
        <label>
          Teléfono:
          <input type="text" name="telefono" value={form.telefono} onChange={handleChange} />
        </label><br />
        <button type="submit">Guardar Alumno</button>
      </form>
    </div>
  )
}

export default NuevoAlumno
