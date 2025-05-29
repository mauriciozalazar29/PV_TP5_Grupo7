import { useParams, useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';
import { getStudentById, updateStudent } from '../utils/storage';

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = getStudentById(id);

  const handleUpdate = (updatedStudent) => {
    updateStudent(updatedStudent);
    navigate('/alumnos');
  };

  if (!student) return <div className="p-4">Alumno no encontrado</div>;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Editar Alumno</h2>
      <StudentForm initialData={student} onSubmit={handleUpdate} />
    </div>
  );
}
