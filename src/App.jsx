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
      id: 'APU005822',
      nombre: 'Mauricio',
      apellido: 'Zalazar',
      curso: 'Tercero',
      email: 'mauriitomas@mail.com',
      domicilio: 'Av. Patricias Argentinas 29',
      telefono: '3885060217',
    },
  ])

  // Eliminar alumno por ID
  const eliminarAlumno = (id) => {
    const confirmacion = confirm('¿Estás seguro de eliminar este alumno?')
    if (confirmacion) {
      setAlumnos(alumnos.filter(a => a.id !== id))
    }
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
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <small>&copy; 2025 - Grupo 7 - Programación Visual | Facultad de Ingeniería</small>
        </div>
      </footer>
    </div>
  )
}

export default App
