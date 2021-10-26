import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyecto = ({ proyecto }) => {

  // Extraer el State
  const proyectosContext = useContext(proyectoContext);
  const { seleccionarProyecto } = proyectosContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-link link"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        📋 <b>{proyecto.nombre}</b>
      </button>
    </li>
  );
};

export default Proyecto;
