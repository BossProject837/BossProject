import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  //LOGIN_EXITOSO,
  LOGIN_ERROR,
  //CERRAR_SESION,
} from "../../types";

const AuthState = (props) => {
  // initial state
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(authReducer, initialState);

  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      //console.log(respuesta.data);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });
      // Obtener el usuario
      usuarioAutenticado();
    } catch (error) {
      //console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alert-danger",
      };
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  // Retornar usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      // funcion que envia el token por headers
      tokenAuth(token);
    }
    try {
      const respuesta = await clienteAxios.get("/api/auth");
      //console.log(respuesta);
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario
      })
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
