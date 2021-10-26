import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {

  // Extraer el State
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Si no hay un proyecto seleccionado
  if (!proyecto) {
    return <h2>✅ Selecciona un proyecto...</h2>;
  }
  // Destructuring para ver el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { id: 1, nombre: "Crear Portada", estado: true },
    { id: 2, nombre: "Acceder a la Api", estado: true },
    { id: 3, nombre: "Añadir estilos", estado: false },
    { id: 4, nombre: "Realizar deploy", estado: false },
  ];

  return (
    <Fragment>
      <h2 id="proyecto">🗃 {proyectoActual.nombre}</h2>
      <ul>
        {tareasProyecto.length === 0 ? (
          <li className="listaTareas">
            <h3>🤷🏻‍♂️ No hay tareas para este proyecto...</h3>
          </li>
        ) : (
          tareasProyecto.map((i) => <Tarea key={i.id} tarea={i}></Tarea>)
        )}
      </ul>
      <button id="eliminarProyecto" className="btn btn-danger w-100 authbutton">
        Eliminar Proyecto 💣
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
