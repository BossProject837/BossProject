import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  
  // Extraer el State de proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Extraer el state de tarea
  const tareasContext = useContext(tareaContext);
  const { agregarTarea } = tareasContext;

  // State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: ''
  });

  // Extraer el nombre de la tarea 
  const { nombre } = tarea;


  // Si no hay un proyecto seleccionado
  if (!proyecto) {
    return null;
  }

  // Destructuring para ver el proyecto actual
  const [proyectoActual] = proyecto;

  // Leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar tarea


    // Pasar la validacion


    // Agregar la nueva tarea al state de tareas
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false
    agregarTarea(tarea);

    // Reiniciar el form de tareas


  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
        <h1 id="proyecto">🗃 {proyectoActual.nombre}</h1>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Crea una Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
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
