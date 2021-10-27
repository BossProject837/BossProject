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
        <h1 id="proyecto">🗃 {proyectoActual.nombre}</h1>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Crea una Tarea..."
          />
        </div>
        <div>
          <br />
          <input
            type="submit"
            className="btn btn-primary authbutton"
            value={"Agregar +"}
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
