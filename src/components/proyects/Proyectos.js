import React from "react";
import Sidebar from "../layout/Sidebar";

const Proyectos = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>BossProject</h1>
        </div>
        <div className="col-md-4">
          <Sidebar className="col sidebar"></Sidebar>
        </div>
        <div className="col-md-8">
          <main>
            <div className="container">
              <h3>notas</h3>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
