import React from "react";

const Barra = () => {
  return (
    <div>
      <header className="app-header">
        <h3>
          Hola <span className="nombre-usuario">Mauricio</span>
        </h3>
      </header>
        <nav className="cerrar">
          <a href="/" className="link ">
            Cerrar sesión
          </a>
        </nav>
      <hr />
    </div>
  );
};

export default Barra;
