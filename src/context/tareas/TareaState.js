import React, { useReducer } from "react";
import tareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import { TAREAS_PROYECTO, AGREGAR_TAREA } from "../../types";

const TareaState = (props) => {
  // State inicial
  const initialState = {
    tareas: [
      { id: 1, nombre: "Crear Portada", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Acceder a la Api", estado: true, proyectoId: 2 },
      { id: 3, nombre: "Añadir estilos", estado: false, proyectoId: 3 },
      { id: 4, nombre: "Realizar deploy", estado: false, proyectoId: 4 },
      { id: 5, nombre: "Crear Portada", estado: true, proyectoId: 2 },
      { id: 6, nombre: "Acceder a la Api", estado: true, proyectoId: 3 },
      { id: 7, nombre: "Añadir estilos", estado: false, proyectoId: 4 },
      { id: 8, nombre: "Realizar deploy", estado: false, proyectoId: 1 },
      { id: 9, nombre: "Crear Portada", estado: true, proyectoId: 3 },
      { id: 10, nombre: "Acceder a la Api", estado: true, proyectoId: 4 },
      { id: 11, nombre: "Añadir estilos", estado: false, proyectoId: 1 },
      { id: 12, nombre: "Realizar deploy", estado: false, proyectoId: 2 },
      { id: 13, nombre: "Crear Portada", estado: true, proyectoId: 4 },
      { id: 14, nombre: "Acceder a la Api", estado: true, proyectoId: 4 },
      { id: 15, nombre: "Añadir estilos", estado: false, proyectoId: 1 },
      { id: 16, nombre: "Realizar deploy", estado: false, proyectoId: 1 },
    ],
    tareasProyecto: null,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  // Crear las funciones

  // Obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  // Agregar Tarea al proyecto seleccionado
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea
    });
  };

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        obtenerTareas,
        agregarTarea,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
