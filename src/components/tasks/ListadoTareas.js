import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  // Extraer el State de proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // Extraer el state de tarea
  const tareasContext = useContext(tareaContext);
  const { tareasProyecto } = tareasContext;

  // Si no hay un proyecto seleccionado
  if (!proyecto) {
    return (
      <div>
        <h1>Bienvenido!</h1>
        <br />
        <br />
        <br />
        <h2>✅ Selecciona un proyecto...</h2>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
  // Destructuring para ver el proyecto actual
  const [proyectoActual] = proyecto;

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
            <h3>🤷🏻‍♂️ No hay tareas, puedes crear algunas...</h3>
          </li>
        ) : 
          <TransitionGroup>
            {tareasProyecto.map((i) => (
              <CSSTransition key={i.id} timeout={200} classNames='tarea'>
                <Tarea  tarea={i}></Tarea>
              </CSSTransition>
            ))}
          </TransitionGroup>
        }
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
