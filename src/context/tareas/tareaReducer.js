import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA
} from "../../types";

const tareaReducer = (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasProyecto: state.tareas.filter(
          (i) => i.proyectoId === action.payload
        ),
      };
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
        errorTarea: false,
      };
    case VALIDAR_TAREA:
      return {
        ...state,
        errorTarea: true,
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((i) => i.id !== action.payload),
      };
    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareas.map((i) =>
          i.id === action.payload.id ? action.payload : i
        ),
      };
    case TAREA_ACTUAL:
      return {
        ...state,
        tareaSeleccionada: action.payload,
      };
    case ACTUALIZAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.map((i) =>
          i.id === action.payload.id ? action.payload : i
        ),
      };
    case LIMPIAR_TAREA:
      return {
        ...state,
        tareaSeleccionada: null
      }

    default:
      return state;
  }
};
export default tareaReducer;
