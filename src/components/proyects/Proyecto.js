import React from "react";

const Proyecto = ({proyecto}) => {
  return (
    <li>
      <button type="button" className="btn btn-link link">📋 <b>{proyecto.nombre}</b></button>
    </li>
  );
};

export default Proyecto;
