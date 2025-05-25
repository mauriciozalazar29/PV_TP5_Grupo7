import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'
import ListaAlumnos from './views/ListaAlumnos'
//import NuevoAlumno from './views/NuevoAlumno'
//import EditarAlumno from './views/EditarAlumno'
import DetalleAlumno from './views/DetalleAlumno'
import AcercaDe from './views/AcercaDe'

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
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/alumnos"
          element={
            <ListaAlumnos
              alumnos={alumnos}
              onEliminar={eliminarAlumno}
            />
          }
        />
        <Route
          path="/alumnos/:id"
          element={<DetalleAlumno alumnos={alumnos} />}
        />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </>
  )
}

export default App
