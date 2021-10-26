import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  // Obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);

  // Extraer proyectos del State inicial
  const { proyectos, obtenerProyectos } = proyectosContext;

  // Obtener proyectos cuando carga el componenete
  useEffect(() => {
    obtenerProyectos();
  }, []);

  // Validar si proyectos tiene contenido
  if (proyectos === 0) {
    return null;
  }

  return (
    <ul className="listaProyectos">
      {proyectos.map((i) => (
        <Proyecto key={i.id} proyecto={i}></Proyecto>
      ))}
    </ul>
  );
};

export default ListadoProyectos;
