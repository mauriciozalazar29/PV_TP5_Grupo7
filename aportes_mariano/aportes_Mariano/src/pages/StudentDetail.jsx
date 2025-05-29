import { useParams } from 'react-router-dom';
import { getStudentById } from '../utils/storage';

export default function StudentDetail() {
  const { id } = useParams();
  const student = getStudentById(id);

  if (!student) return <div className="p-4">Alumno no encontrado</div>;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Detalles del Alumno</h2>
      <ul className="list-disc ml-6">
        <li>LU: {student.id}</li>
        <li>Nombre: {student.nombre}</li>
        <li>Apellido: {student.apellido}</li>
        <li>Curso: {student.curso}</li>
        <li>Email: {student.email}</li>
        <li>Domicilio: {student.domicilio}</li>
        <li>Teléfono: {student.telefono}</li>
      </ul>
    </div>
  );
}
