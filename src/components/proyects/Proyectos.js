import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import FormTarea from "../tasks/FormTarea";
import ListadoTareas from "../tasks/ListadoTareas";
import AuthContext from "../../context/autenticacion/authContext";

const Proyectos = () => {
  // Extraer los valores de AuthContext.js
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>🅱️ BossProject</h1>
        </div>
        <div className="col-md-4">
          <Sidebar className="col sidebar"></Sidebar>
        </div>
        <div className="col-md-8">
          <main>
            <FormTarea></FormTarea>
            <ListadoTareas></ListadoTareas>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
