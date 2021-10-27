import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { v4 as uuidv4 } from 'uuid';
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    /* { id: 1, nombre: "Weather" },
    { id: 2, nombre: "Dating Manager" },
    { id: 3, nombre: "Criptonite" }, */
    { id: 4, nombre: "MovieInfo" }, 
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // Obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  // Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4()

    // Insertar el proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    })
  }

  // Validar Formulario de proyectos
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
     
    })
  }

  // Seleccionar proyecto con click
  const seleccionarProyecto = proyectoid => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoid
    })
  }

  // Elimina un proyecto
  const eliminarProyecto = (proyectoid) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoid
    })
  }

  return (
    <proyectoContext.Provider
      value={{ 
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorFormulario: state.errorFormulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        seleccionarProyecto,
        eliminarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
