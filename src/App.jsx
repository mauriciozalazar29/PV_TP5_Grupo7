import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'
import ListaAlumnos from './views/ListaAlumnos'
import NuevoAlumno from './views/NuevoAlumno'
import EditarAlumno from './views/EditarAlumno'
import DetalleAlumno from './views/DetalleAlumno'
import AcercaDe from './views/AcercaDe'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const navigate = useNavigate()

  const [alumnos, setAlumnos] = useState([
  {
    id: 'INF005822',
    nombre: 'Mauricio',
    apellido: 'Zalazar',
    curso: 'Tercero',
    email: 'mauriitomas@mail.com',
    domicilio: 'Av. Patricias Argentinas 29',
    telefono: '3885060217',
  },
  {
    id: 'APU005823',
    nombre: 'Mariano',
    apellido: 'Gutiérrez',
    curso: 'Primero',
    email: 'marianog@mail.com',
    domicilio: 'Av. Libertad 29',
    telefono: '3882325154',
  },
  {
    id: 'MIN005824',
    nombre: 'Oscar',
    apellido: 'Palavecino',
    curso: 'Quinto',
    email: 'oscarpalavecino@mail.com',
    domicilio: 'Belgrano 321',
    telefono: '3884119988',
  },
  {
    id: 'QUI005825',
    nombre: 'Lazaro',
    apellido: 'Caballero',
    curso: 'Cuarto',
    email: 'lazaroexequiel@mail.com',
    domicilio: 'San Martín 105',
    telefono: '3885122233',
  },
  {
    id: 'IND005826',
    nombre: 'Christian',
    apellido: 'Herrera',
    curso: 'Segundo',
    email: 'christianmataco@mail.com',
    domicilio: 'Lavalle 12',
    telefono: '3883014789',
  }
])

  // Eliminar alumno por ID
  const eliminarAlumno = (id) => {
  setAlumnos(alumnos.filter(a => a.id !== id))
}


  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="container py-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/alumnos"
            element={<ListaAlumnos alumnos={alumnos} onEliminar={eliminarAlumno} />}
          />
          <Route
            path="/alumnos/nuevo"
            element={<NuevoAlumno alumnos={alumnos} setAlumnos={setAlumnos} navigate={navigate} />}
          />
          <Route
            path="/alumnos/:id"
            element={<DetalleAlumno alumnos={alumnos} />}
          />
          <Route
            path="/alumnos/:id/editar"
            element={<EditarAlumno alumnos={alumnos} setAlumnos={setAlumnos} navigate={navigate} />}
          />
          <Route path="/acerca" element={<AcercaDe />} />
        </Routes>
      </main>
          <footer className="bg-dark text-white pt-4 pb-3 mt-auto">
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <h5 className="fw-bold mb-3">
                    <i className="bi bi-mortarboard-fill me-2"></i>EduManager
                  </h5>
                  <p className="text mb-3">Plataforma de gestión académica para instituciones modernas.</p>
                  <p className="mb-1.5">
                    <i className="bi bi-whatsapp me-2"></i>
                    WhatsApp: <a href="https://wa.me/3884708223" className="text-decoration-none text-info">3884708223</a>
                  </p>
                  <p className="mb-1.5">
                    <i className="bi bi-envelope-fill me-2"></i>
                    Correo oficial: <a href="mailto:virtual@edumanager.com" className="text-decoration-none text-info">virtual@edumanager.com</a>
                  </p>
                  <p className="mb-1.5">
                    <i className="bi bi-envelope me-2"></i>
                    Correo secundario: <a href="mailto:cursos@edumanager.com" className="text-decoration-none text-info">cursos@edumanager.com</a>
                  </p>
                </div>

                <div className="col-md-6 text-md-end d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-white me-3"><i className="bi bi-facebook fs-5"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-white me-3"><i className="bi bi-instagram fs-5"></i></a>
                    <a href="https://www.youtube.com/@mauriiciozalazar1138" target="_blank" rel="noopener noreferrer" className="text-white me-3"><i className="bi bi-youtube fs-5"></i></a>
                    <a href="https://www.linkedin.com/in/mauricio-tomas-zalazar-79a735354/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-linkedin fs-5"></i></a>
                  </div>
                  <div className="text small">
                    &copy; {new Date().getFullYear()} EduManager — Todos los derechos reservados
                  </div>
                </div>
              </div>
            </div>
          </footer>
    </div>
  )
}

export default App
