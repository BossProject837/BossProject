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
      <br />
      <div>
        <h4>🗂 Tus Proyectos</h4>
        <ListadoProyectos></ListadoProyectos>
      </div>
    </aside>
  );
};

export default Sidebar;
