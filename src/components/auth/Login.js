import React, { useState } from "react";
import portada from "../../assets/portada.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  // State para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  // Extraer usuario
  const { email, password } = usuario;

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
      <h1>🅱️ BossProject</h1>
      <h2>Inicia Sesión</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Tu Email..."
            className="form-control"
            id="exampleInputEmail1"
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
            id="exampleInputPassword1"
            onChange={onChange}
            value={password}
          />
          <span id="passwordHelpInline" className="form-text">
            Dede tener entre 6 - 10 caracteres...
          </span>
        </div>

        <button type="submit" className="btn btn-primary w-100 authbutton">
          Ingresar
        </button>
      </form>
      <center>
        <Link to={"/registro"} className="link">
          Obtener cuenta
        </Link>
        <br />
        <Link to={"/proyectos"} className="link">
          Proyectos
        </Link>
      </center>
      <img id="portada" src={portada} alt="foto" />
    </div>
  );
};

export default Login;
