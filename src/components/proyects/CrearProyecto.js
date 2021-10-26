import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const CrearProyecto = () => {
  // Obtener el State del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorFormulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  // State de Nuevo Proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  // Extraer nombre del royecto
  const { nombre } = proyecto;

  // Leer input
  const onChange = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // onSubmit prevenir reinicio y enviar el proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    // Validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    // Agregar al State
    agregarProyecto(proyecto);

    // Reiniciar el form
    guardarProyecto({
      nombre: "",
    });
  };

  return (
    <Fragment>
      <button
        className="btn btn-primary w-100 authbutton"
        onClick={mostrarFormulario}
      >
        📝 Crea un Proyecto
      </button>
      {formulario ? (
        <form onSubmit={onSubmitProyecto}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre de tu proyecto"
            className="form-control"
            id="nombre"
            aria-describedby="nombreHelp"
            onChange={onChange}
            value={nombre}
          />
          <br />
          <input
            type="submit"
            className="btn btn-primary w-100 authbutton"
            value={"🗄 Guarda tu Proyecto"}
          />
        </form>
      ) : null}
      {errorFormulario ? (
        <div class="alert alert-danger" role="alert">
          Debes escribir un nombre...
        </div>
      ) : null}
    </Fragment>
  );
};

export default CrearProyecto;
