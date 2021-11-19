import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";
import clienteAxios from "../../config/axios";

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
      console.log(respuesta.data);

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });
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
