import React from "react";
import CrearProyecto from "../proyects/CrearProyecto";

const Sidebar = () => {
  return (
    <aside>
      <h3>Menu</h3>
      <br />
      <CrearProyecto></CrearProyecto>
      <br />
      <div>
        <h4>Tus Proyectos</h4>{" "}
      </div>
    </aside>
  );
};

export default Sidebar;
