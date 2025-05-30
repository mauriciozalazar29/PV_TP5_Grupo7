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
    id: 'APU005824',
    nombre: 'Oscar',
    apellido: 'Palavecino',
    curso: 'Quinto',
    email: 'oscarpalavecino@mail.com',
    domicilio: 'Belgrano 321',
    telefono: '3884119988',
  },
  {
    id: 'APU005825',
    nombre: 'Lazaro',
    apellido: 'Caballero',
    curso: 'Cuarto',
    email: 'lazaroexequiel@mail.com',
    domicilio: 'San Martín 105',
    telefono: '3885122233',
  },
  {
    id: 'APU005826',
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
