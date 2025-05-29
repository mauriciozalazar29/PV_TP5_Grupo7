import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import StudentDetail from './pages/StudentDetail';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/alumnos" element={<StudentList />} />
        <Route path="/alumnos/nuevo" element={<AddStudent />} />
        <Route path="/alumnos/:id" element={<StudentDetail />} />
        <Route path="/alumnos/:id/editar" element={<EditStudent />} />
      </Routes>
    </div>
  );
}