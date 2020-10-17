import React, { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import "./Imagen.css";

const Imagen = (props) => {
  const {
    imagen: { largeImageURL, downloads, tags, views, user },
  } = props;
  //States
  const [getURLImage, setGetURLImage] = useState("");
  const [modal, setModal] = useState(false);
  const obtenerURL = (url) => {
    setGetURLImage(url);
    setModal(true);
  };
  const resetURL = () => {
    setGetURLImage("");
    setModal(false);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-5 mt-3 col-lg-3">
      <div className="container-card-image">
        <img src={largeImageURL} alt={tags} className="card-img-top" />
        <div className="card-image__texts">
          <p>
            <span>Vistas:</span> {views}
          </p>
          <p>
            <span>Descargas: </span>
            {downloads}
          </p>
          <div className="card-image__button">
            <button onClick={() => obtenerURL(largeImageURL)}>
              Ver Imagen
            </button>
            <div className="row">
              <div className="col-md-12">
                <PureModal
                  className="image-modal"
                  header="Image Search Engine"
                  footer={
                    <div>
                      <button onClick={() => resetURL()}>Cerrar</button>
                    </div>
                  }
                  isOpen={modal}
                  onClose={() => {
                    setModal(false);
                    return true;
                  }}
                >
                  <div>
                    <img src={getURLImage} alt={tags} />
                  </div>
                </PureModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
