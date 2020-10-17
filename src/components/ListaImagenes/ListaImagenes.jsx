import React from "react";
import Imagen from "../Imagen/Imagen";
import "./ListaImagenes.css";

const ListaImagenes = (props) => {
  const { imagenes } = props;
  console.log(imagenes);
  return (
    <div className="col-12 p-5 row container">
      {imagenes.map((item) => {
        return <Imagen key={item.id} imagen={item} />;
      })}
    </div>
  );
};

export default ListaImagenes;
