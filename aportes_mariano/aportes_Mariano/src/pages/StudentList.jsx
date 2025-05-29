import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../utils/storage';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const handleDelete = (id) => {
    if (confirm('¿Eliminar alumno?')) {
      deleteStudent(id);
      setStudents(getStudents());
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Lista de Alumnos</h2>
      {students.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
        <table className="w-full border table-auto">
          <thead>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.nombre}</td>
                <td>{s.apellido}</td>
                <td className="space-x-2">
                  <button onClick={() => navigate(`/alumnos/${s.id}/editar`)}>Editar</button>
                  <button onClick={() => handleDelete(s.id)}>Eliminar</button>
                  <Link to={`/alumnos/${s.id}`}>Ver</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
