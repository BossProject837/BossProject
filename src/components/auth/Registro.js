import React, { useState } from "react";
import portada from "../../assets/portada.jpg";
import { Link } from "react-router-dom";

const Registro = () => {
  // State para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  // Extraer usuario - destructuring
  const { email, password, nombre, confirmar } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // Click para iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container col-md-6 ppal">
      <h1>🅱️ Crea tu cuenta</h1>
      <h2>Ingresa tus datos</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            placeholder="Tu Nombre..."
            className="form-control"
            id="nombre"
            aria-describedby="nombreHelp"
            value={nombre}
            onChange={onChange}
          />
          <br />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Tu Email..."
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            Nunca vamos a compartirlo con nadie...
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Tu Password..."
            className="form-control"
            id="password"
            onChange={onChange}
            value={password}
          />
          <span id="passwordHelpInline" className="form-text">
            Dede tener entre 6 - 10 caracteres...
          </span>
          <br />
          <br />
          <label htmlFor="confirmar" className="form-label">
            Confirma tu Password
          </label>

          <input
            type="password"
            name="confirmar"
            placeholder="Tu Password Nuevamente..."
            className="form-control"
            id="confirmar"
            onChange={onChange}
            value={confirmar}
          />
          <span id="passwordHelpInline" className="form-text">
            Dede tener entre 6 - 10 caracteres...
          </span>
        </div>

        <button type="submit" className="btn btn-primary w-100 authbutton">
          Registrar
        </button>
      </form>
      <center>
        <Link to={"/"} className="link">
          Inicia sesión
        </Link>
      </center>
      <img id="portada" src={portada} alt="foto" />
    </div>
  );
};

export default Registro;
