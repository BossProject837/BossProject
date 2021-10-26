import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types";

const proyectoReducer = (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };

    default:
      return state;
  }
};
export default proyectoReducer;
 