import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { id: 1, nombre: "Crear Portada", estado: true },
    { id: 2, nombre: "Acceder a la Api", estado: true },
    { id: 3, nombre: "Añadir estilos", estado: false },
    { id: 4, nombre: "Realizar deploy", estado: false },
  ];

  return (
    <Fragment>
      <h2 id="proyecto">🗃 Weather App</h2>
      <ul>
        {tareasProyecto.length === 0 ? (
          <li className="listaTareas">
            <h3>🤷🏻‍♂️ No hay tareas para este proyecto...</h3>
          </li>
        ) : (
          tareasProyecto.map((i) => <Tarea key={i.id} tarea={i}></Tarea>)
        )}
      </ul>
      <button id='eliminarProyecto' className="btn btn-danger w-100">Eliminar Proyecto  💣</button>
    </Fragment>
  );
};

export default ListadoTareas;
