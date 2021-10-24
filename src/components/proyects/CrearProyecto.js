import React, { Fragment, useState } from "react";

const CrearProyecto = () => {

    // State de Nuevo Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: "",
    });

    // Extraer nombre del royecto
    const {nombre} = proyecto;

    // Leer input
    const onChange = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value,
        });
    };

    // onSubmit prevenir reinicio
    const onSubmitProyecto = (e) =>{
        e.preventDefault()
    }

  return (
    <Fragment>
      <button className="btn btn-primary w-100">Crea un Proyecto</button>
      <form onSubmit={onSubmitProyecto}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre de tu proyecto"
          className="form-control"
          id="nombre"
          aria-describedby="nombreHelp"
          onChange={onChange}
          value={nombre}
        />
        <br />
        <input
          type="submit"
          className="btn btn-primary w-100"
          value={"Guarda tu Proyecto"}
        />
      </form>
    </Fragment>
  );
};

export default CrearProyecto;
