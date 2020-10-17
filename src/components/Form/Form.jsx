import React, { useState } from "react";
import "./Form.css";
import Error from "../Error/Error";

const Form = (props) => {
  const { setBusqueda } = props;
  //useState
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);

  //Función para buscar la imagen
  const buscarImagenes = (event) => {
    event.preventDefault();
    if (termino.trim() === "") {
      setError(true);
      return;
    } else {
      setError(false);
      setBusqueda(termino);
    }
  };
  return (
    <div className="container">
      <form className="form-group" onSubmit={buscarImagenes}>
        <div className="row container-form mt-5">
          <div className="form-group col-md-8">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Busca una imagen, ejemplo: fútbol o café"
              onChange={(event) => setTermino(event.target.value)}
            />
          </div>
          <div className="form-group col-md-8">
            <input
              className="form-control form-control-lg btn-submit"
              type="submit"
              value="Buscar"
            />
            {error ? (
              <Error mensaje="Error: Agrega un término de búsqueda" />
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
