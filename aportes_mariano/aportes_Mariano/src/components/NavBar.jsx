import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 space-x-4">
      <Link to="/">Inicio</Link>
      <Link to="/alumnos">Lista de Alumnos</Link>
      <Link to="/alumnos/nuevo">Nuevo Alumno</Link>
      <Link to="/acerca">Acerca de</Link>
    </nav>
  );
}
