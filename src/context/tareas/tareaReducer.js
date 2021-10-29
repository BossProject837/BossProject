import { TAREAS_PROYECTO, AGREGAR_TAREA } from "../../types";

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
        tareas: [...state.tareas, action.payload],
      };

    default:
      return state;
  }
};
export default tareaReducer;
