import { Link } from 'react-router-dom'

const ListaAlumnos = ({ alumnos, onEliminar }) => {
  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>LU</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.curso}</td>
              <td>
                <Link to={`/alumnos/${alumno.id}`}>Ver</Link>{' | '}
                <Link to={`/alumnos/${alumno.id}/editar`}>Editar</Link>{' | '}
                <button onClick={() => onEliminar(alumno.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaAlumnos


