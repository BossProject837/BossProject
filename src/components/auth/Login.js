import React, { useState, useContext, useEffect } from "react";
import portada from "../../assets/portada.jpg";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";

const Login = (props) => {
  // Extraer los valores de AlertaContext.js
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  // Extraer los valores de AuthContext.js
  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  // Cuando el usuario se haya autenticado o salga un error de: usuario ya existe
  useEffect(() => {
    if (autenticado) {
      props.history.push('/proyectos')
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  
  // eslint-disable-next-line
  }, [mensaje, autenticado, props.history])

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

    // Validar campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios...", "alert-danger");
      return;
    }

    // Iniciar sesion
    iniciarSesion({email, password})
  };

  return (
    <div className="container col-md-6 ppal">
      <h1>🅱️ BossProject</h1>
      <h2>Inicia Sesión</h2>
      {alerta ? (
        <div className={`alert ${alerta.categoria}`} role="alert">
          {alerta.msg}
        </div>
      ) : null}
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
        
      </center>
      <img id="portada" src={portada} alt="foto" />
    </div>
  );
};

export default Login;
