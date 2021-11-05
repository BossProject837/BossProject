import React from "react";

const Hora = () => {
  return (
    <div>
      <center className='alert alert-primary'>Bogota, Colombia.</center>
      <iframe
        title="hora"
        src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=medium&timezone=America%2FBogota"
        width="100%"
        height="115"
        frameborder="0"
        seamless
      ></iframe>{" "}
    </div>
  );
};

export default Hora;
