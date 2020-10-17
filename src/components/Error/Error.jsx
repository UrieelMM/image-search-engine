import React from "react";
import "./Error.css";

const Error = (props) => {
  const { mensaje } = props;
  return (
    <div class="alert alert-danger text-center" role="alert">
      {mensaje}
    </div>
  );
};

export default Error;
