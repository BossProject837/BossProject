import React from "react";
import Sidebar from "../layout/Sidebar";
import FormTarea from "../tasks/FormTarea";
import ListadoTareas from "../tasks/ListadoTareas";

const Proyectos = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>BossProject</h1>
        </div>
        <div className="col-md-4">
          <Sidebar className="col sidebar"></Sidebar>
        </div>
        <div className="col-md-8">
          <main>
            <nav className="cerrar">
              <a href="/" className="link ">
                Cerrar sesión
              </a>
            </nav>
            <FormTarea></FormTarea>
            <ListadoTareas></ListadoTareas>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
