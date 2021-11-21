import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/autenticacion/authContext";

const Barra = () => {
  // Extraer los valores de AuthContext.js
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAutenticado();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <header className="app-header">
        {usuario ? (
          <h3>
            Hola <span className="nombre-usuario">{usuario.nombre}</span>
          </h3>
        ) : null}
      </header>
      <nav className="cerrar">
        <a href="/" className="link" onClick={() => cerrarSesion()}>
          Cerrar sesión
        </a>
      </nav>
      <hr />
    </div>
  );
};

export default Barra;
