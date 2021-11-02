import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoProyectos = () => {
  // Obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);

  // Extraer proyectos del State inicial
  const { proyectos, obtenerProyectos } = proyectosContext;

  // Obtener proyectos cuando carga el componenete
  useEffect(() => {
    obtenerProyectos();

    // eslint-disable-next-line
  }, []);

  // Validar si proyectos tiene contenido
  if (proyectos.length === 0) {
    return (
      <div>
        <br />
        <br />
        <h2>👷🏻‍♂️</h2>
        <h4>Puedes crear tu primer proyecto...</h4>
      </div>
    );
  }

  return (
    <ul className="listaProyectos">
      <TransitionGroup>
        {proyectos.map((i) => (
          <CSSTransition key={i.id} classNames="proyecto" timeout={200}>
            <Proyecto proyecto={i}></Proyecto>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
