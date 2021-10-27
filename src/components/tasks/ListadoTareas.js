import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  // Extraer el State
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // Si no hay un proyecto seleccionado
  if (!proyecto) {
    return (
      <div>
        <h1>Bienvenido!</h1>
        <br/>
        <br/>
        <br/>
        <h2>✅ Selecciona un proyecto...</h2>
      </div>
    );
  }
  // Destructuring para ver el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { id: 1, nombre: "Crear Portada", estado: true },
    { id: 2, nombre: "Acceder a la Api", estado: true },
    { id: 3, nombre: "Añadir estilos", estado: false },
    { id: 4, nombre: "Realizar deploy", estado: false },
  ];

  // Eliminar Proyecto
  const onClickEliminarProyecto = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <Fragment>
      <h2>Tareas:</h2>
      <ul>
        {tareasProyecto.length === 0 ? (
          <li className="listaTareas">
            <h3>🤷🏻‍♂️ No hay tareas para este proyecto...</h3>
          </li>
        ) : (
          tareasProyecto.map((i) => <Tarea key={i.id} tarea={i}></Tarea>)
        )}
      </ul>
      <button
        id="eliminarProyecto"
        className="btn btn-danger w-100 authbutton"
        onClick={onClickEliminarProyecto}
      >
        Eliminar Proyecto 💣
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
