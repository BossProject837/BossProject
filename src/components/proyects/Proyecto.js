import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {

  // Extraer el State de proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;
  
  // Extraer el State de tarea
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;
  

  // Funcion para agregar el proyecto actual
  const seleccionarProyecto = id => {
    proyectoActual(id) // Fijar un proyecto actual
    obtenerTareas(id) // Filtrar tareas cuando se de click
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-link link"
        onClick={() => seleccionarProyecto(proyecto._id)}
      >
        📋 <b>{proyecto.nombre}</b>
      </button>
    </li>
  );
};

export default Proyecto;
