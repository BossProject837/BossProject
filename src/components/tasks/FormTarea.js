import React from "react";

const FormTarea = () => {
  return (
    <div>
      <form>
        <div>
            <br/>
          <input type="text" className="form-control" placeholder="Nombre Tarea" />
        </div>
        <div>
            <br/>
          <input
            type="submit"
            className="btn btn-primary authbutton"
            value={"🗒 Agregar Tarea"}
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
