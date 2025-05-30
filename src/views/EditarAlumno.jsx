import { useParams } from 'react-router-dom'
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

  useEffect(() => {
    if (alumnoOriginal) {
      setForm(alumnoOriginal)
    }
  }, [alumnoOriginal])

  if (!alumnoOriginal) {
    return <p>Alumno no encontrado</p>
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setAlumnos(
      alumnos.map(a => (a.id === id ? form : a))
    )

    navigate('/alumnos')
  }

  return (
    <div>
      <h2>Editar Alumno</h2>
      <form onSubmit={handleSubmit}>
        <label>
          LU:
          <input type="text" name="id" value={form.id} onChange={handleChange}  />
        </label><br />
        <label>
          Nombre:
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
        </label><br />
        <label>
          Apellido:
          <input type="text" name="apellido" value={form.apellido} onChange={handleChange} />
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
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  )
}

export default EditarAlumno
