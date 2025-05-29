import { useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';
import { addStudent } from '../utils/storage';

export default function AddStudent() {
  const navigate = useNavigate();

  const handleAdd = (newStudent) => {
    addStudent(newStudent);
    navigate('/alumnos');
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Agregar Alumno</h2>
      <StudentForm onSubmit={handleAdd} />
    </div>
  );
}
