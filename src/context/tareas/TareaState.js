import React, { useReducer } from "react";
import tareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import {} from "../../types";

const TareaState = (props) => {

    const initialState = {
        tareas: [],

    }

    // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(tareaReducer, initialState);

    return ( 
        <tareaContext.Provider
            
        >
            {props.children}
        </tareaContext.Provider>
     );
}
 
export default TareaState;