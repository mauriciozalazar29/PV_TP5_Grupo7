const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="text-center px-4">
        <h1 className="mb-3 text-primary">Gestión de Alumnos</h1>
        <h3 className="mb-4 text-secondary">Administra tus alumnos de manera sencilla y eficiente</h3>
        <p className="lead mb-4">
          Esta aplicación te permite crear, editar, eliminar y visualizar información de alumnos en tiempo real, utilizando tecnologías modernas como React y Bootstrap.
        </p>
        <button type="button" className="btn btn-primary btn-lg">
          Comenzar
        </button>
      </div>
    </div>
  )
}

export default Home
