const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
      <div className="text-center">
        <h1 className="mb-4 text-primary">¡Bienvenido!</h1>
        <p className="lead mb-4">
          Esta es la aplicación de <strong>Gestión de Alumnos</strong> del Trabajo Práctico N°5.<br />
          Usá el menú superior para navegar entre las distintas secciones.
        </p>
        <div className="alert alert-info" role="alert">
          Creá, editá, eliminá y visualizá alumnos usando React + Bootstrap.
        </div>
      </div>
    </div>
  )
}

export default Home
