import React, { useState } from "react";
import { Error } from "./Error";
import PropTypes from "prop-types";

export const Pregunta = ({
  setMostrarPregunta,
  setPresupuesto,
  setRestante,
}) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // Si pasa la validación
    setError(false);

    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };
  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          name="presupuesto"
          onChange={handleInputChange}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.propTypes = {
  setMostrarPregunta: PropTypes.func.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
};
