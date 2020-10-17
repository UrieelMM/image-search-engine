import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import ListaImagenes from "./components/ListaImagenes/ListaImagenes";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  //States
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  //useEffect
  useEffect(() => {
    if (busqueda === "") return;
    const consultarApi = async () => {
      const imagenesPorPagina = 32;
      const key = "18631679-d9f12cd2bd67909da2cd4b8c1";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setImagenes(resultado.hits);
      console.log(resultado.hits);
      //Calcular el total de páginas
      const calcularTotalPaginas = Math.ceil(
        resultado.totalHits / imagenesPorPagina
      );
      setTotalPaginas(calcularTotalPaginas);
      //Scroll automatico
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultarApi();
  }, [busqueda, paginaActual]);
  //Pagination
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if (nuevaPaginaActual === 0) return;
    setPaginaActual(nuevaPaginaActual);
  };
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;
    if (nuevaPaginaActual > totalPaginas) return;
    setPaginaActual(nuevaPaginaActual);
  };
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1 className="display-4 text-center">Image Search Engine</h1>
        <p className="lead text-center">Find the ideal image</p>
        <Form setBusqueda={setBusqueda} />
      </div>
      {!busqueda ? (
        <div className="leyenda">
          <p className="text-center mt-5">Realiza una busqueda</p>
        </div>
      ) : (
        <div className="row justify-content-center">
          {imagenes.length === 0 ? (
            <div className="leyenda">
              <p>
                <span>
                  Lo siento, <br /> no pude encontrar nada 😔
                </span>
              </p>
            </div>
          ) : (
            <>
              <ListaImagenes imagenes={imagenes} />
              <div className="btns-pagination">
                {paginaActual === 1 ? null : (
                  <button onClick={paginaAnterior}> &laquo; Atrás </button>
                )}
                {paginaActual === totalPaginas ? null : (
                  <button onClick={paginaSiguiente}>Siguiente &raquo;</button>
                )}
              </div>
            </>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
