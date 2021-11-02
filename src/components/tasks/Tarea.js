import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Tarea = ({ tarea }) => {
  // Extraer el state de proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Extraer el proyecto
  const [proyectoActual] = proyecto;

  // Extraer el state de tarea
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTareas, cambiarEstado, guardarTareaActual } =
    tareasContext;

  // Funcion para eliminar tarea con button eliminar
  const eliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  // Función que modifica el estado de las tareas
  const cambiarEstadoTareas = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiarEstado(tarea);
  };

  // Seleccionar tarea para editarla
  const seleccionarTarea = tarea => {
    guardarTareaActual(tarea)
  }

  return (
    <div>
      <li className="liTareas listaTareas">
        <p>{tarea.nombre}</p>

        <hr />

        <div>
          {tarea.estado ? (
            <a
              href="#!"
              className="btn btn-outline-success btn-sm estado"
              type="button"
              onClick={() => cambiarEstadoTareas(tarea)}
            >
              Completo
            </a>
          ) : (
            <a
              href="#!"
              className="btn btn-outline-danger btn-sm estado"
              type="button"
              onClick={() => cambiarEstadoTareas(tarea)}
            >
              Pendiente
            </a>
          )}
          <button
            className="btn btn-outline-primary estado"
            onClick={() => seleccionarTarea(tarea)}
          >
            ✏️
          </button>
          <button
            className="btn btn-outline-danger estado"
            onClick={() => eliminar(tarea.id)}
          >
            🗑
          </button>
        </div>
      </li>
      <hr />
    </div>
  );
};

export default Tarea;
