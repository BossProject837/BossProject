import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {
  
  // Extraer el State
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Si no hay un proyecto seleccionado
  if (!proyecto) {
    return null;
  }
  // Destructuring para ver el proyecto actual
  const [proyectoActual] = proyecto;

  return (
    <div>
      <form>
        <div>
          <h2>🗒 Agrega tareas a tu proyecto</h2>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Tarea"
          />
        </div>
        <div>
          <br />
          <input
            type="submit"
            className="btn btn-primary authbutton"
            value={"+"}
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
