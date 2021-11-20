import React, { useState, useContext, useEffect } from "react";
import portada from "../../assets/portada.jpg";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";

const Registro = (props) => {
  // Extraer los valores de AlertaContext.js
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  // Extraer los valores de AuthContext.js
  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  // Cuando el usuario se registre o salga un error de: usuario ya existe
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
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  // Extraer usuario
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

    // Validar que no hayan campos vacios
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios...", "alert-danger");
      return;
    }

    // Validar password > 6 caracteres
    if (password.length < 6 || password.length > 10) {
      mostrarAlerta(
        "El password debe tener entre 6 y 10 caractéres...",
        "alert-danger"
      );
      return;
    }

    // Validar que los dos passwords sean iguales
    if (password !== confirmar) {
      mostrarAlerta("Los passwords deben ser iguales...", "alert-danger");
      return;
    }

    // Registrar Usuario
    registrarUsuario({
      nombre,
      email,
      password,
    });
  };

  return (
    <div className="container col-md-6 ppal">
      <h1>🅱️ Crea tu cuenta</h1>
      {alerta ? (
        <div className={`alert ${alerta.categoria}`} role="alert">
          {alerta.msg}
        </div>
      ) : null}
      <center>
        <h2>Ingresa tus datos</h2>
      </center>
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
