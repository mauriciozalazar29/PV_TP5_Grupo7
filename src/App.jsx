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
        <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5">
                <h4 className="fw-bold mb-3">
                  <i className="bi bi-mortarboard-fill me-2 text-info"></i>EduManager
                </h4>
                <p className="text-white-50 text-decoration-none">
                  Plataforma de gestión académica que impulsa el futuro de la educación moderna.
                </p>
                <div className="d-flex gap-3 mt-3">
                  <a href="#" className="text-white-50 fs-5"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-white-50 fs-5"><i className="bi bi-instagram"></i></a>
                  <a href="https://www.youtube.com/@mauriiciozalazar1138" target="_blank" rel="noreferrer" className="text-white-50 fs-5"><i className="bi bi-youtube"></i></a>
                  <a href="https://www.linkedin.com/in/mauricio-tomas-zalazar-79a735354/" target="_blank" rel="noreferrer" className="text-white-50 fs-5"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <h6 className="text-uppercase text-white fw-semibold mb-3">Contacto</h6>
                <ul className="list-unstyled text">
                  <li className="mb-2">
                    <i className="bi bi-whatsapp me-2 text-success"></i>
                    <a href="https://wa.me/3884708223" className="text-white-50 text-decoration-none">+54 388 470 8223</a>
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-envelope-fill me-2 text-info"></i>
                    <a href="mailto:virtual@edumanager.com" className="text-white-50 text-decoration-none">virtual@edumanager.com</a>
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-envelope-fill me-2 text-info"></i>
                    <a href="mailto:virtual@edumanager.com" className="text-white-50 text-decoration-none">cursos@edumanager.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 mb-4">
                <h6 className="text-uppercase text-white fw-semibold mb-3">Enlaces rápidos</h6>
                <ul className="list-unstyled text">
                  <li className="mb-2">
                    <i className="bi bi-house me-2"></i>
                    <a href="/" className="text-white-50 text-decoration-none">Inicio</a>
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-people me-2"></i>
                    <a href="/alumnos" className="text-white-50 text-decoration-none">Alumnos</a>
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-info-circle me-2"></i>
                    <a href="/acerca" className="text-white-50 text-decoration-none">Acerca de</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="border-secondary" />
            <div className="d-flex justify-content-between flex-column flex-md-row align-items-center pt-2">
              <p className="mb-2 mb-md-0 text-white-50 small">
                © {new Date().getFullYear()} EduManager. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
  </div>
  )
}

export default App
