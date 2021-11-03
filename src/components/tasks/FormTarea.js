import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  // Extraer el State de proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Extraer el state de tarea
  const tareasContext = useContext(tareaContext);
  const {
    tareaSeleccionada,
    errorTarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea,
  } = tareasContext;

  // useEffect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaSeleccionada !== null) {
      guardarTarea(tareaSeleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaSeleccionada]);

  // State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  // Extraer el nombre de la tarea
  const { nombre } = tarea;

  // Si no hay un proyecto seleccionado
  if (!proyecto) {
    return null;
  }

  // Destructuring para ver el proyecto actual
  const [proyectoActual] = proyecto;

  // Leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar tarea
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    // Revisar si el usuario esta editando o esta agreagando una nueva tarea
    if (tareaSeleccionada === null) {
      // Tarea nueva
      // Agregar la nueva tarea al state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      // Actualizar tarea existente
      actualizarTarea(tarea);
      // tareaSeleccionada to null
      limpiarTarea();
    }

    // Pasar la validacion - se iguala 'errorTarea: false' en tareaReducer => case AGREGAR_TAREA

    // Obtener y filtrar las tareas de proyectua actual
    obtenerTareas(proyectoActual.id);

    // Reiniciar el form de tareas
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <h1 id="proyecto">🗃 {proyectoActual.nombre}</h1>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Crea una Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <br />
          <input
            type="submit"
            className="btn btn-primary authbutton"
            value={tareaSeleccionada ? "Editar ✏️" : "Agregar +"}
          />
        </div>
      </form>
      {errorTarea ? (
        <p className="alert alert-danger" role="alert">
          Debes ponerle un nombre primero...
        </p>
      ) : null}
    </div>
  );
};

export default FormTarea;
