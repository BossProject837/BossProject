import React from "react";

const Tarea = ({ tarea }) => {
  return (
    <div>
      <li className="liTareas listaTareas">
        <p>{tarea.nombre}</p>

        <hr />

        <div>
          {tarea.estado ? (
            <a
              href="#!"
              className="btn btn-outline-success btn-sm estado"
              type="button"
            >
              Completo
            </a>
          ) : (
            <a
              href="#!"
              className="btn btn-outline-warning btn-sm estado"
              type="button"
            >
              Pendiente
            </a>
          )}
          <button className="btn btn-outline-primary estado">✏️</button>
          <button className="btn btn-outline-danger estado">🗑</button>
        </div>
      </li>
      <hr />
    </div>
  );
};

export default Tarea;
