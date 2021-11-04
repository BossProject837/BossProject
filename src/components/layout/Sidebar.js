import React from "react";
import CrearProyecto from "../proyects/CrearProyecto";
import ListadoProyectos from "../proyects/ListadoProyectos";
import Barra from "./Barra";

const Sidebar = () => {
  return (
    <aside>

      <Barra></Barra>
      
      <br />
      <CrearProyecto></CrearProyecto>

      <div className="listado-proyectos">
        <h4>🗂 Tus Proyectos:</h4>
        <hr />
        <ListadoProyectos></ListadoProyectos>
      </div>
    </aside>
  );
};

export default Sidebar;
