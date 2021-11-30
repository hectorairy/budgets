import React, { useState } from "react";
import { Error } from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

export const Formulario = ({ guardarGastos }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Construir el gasto

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    // Pasar el gasto al componente principal
    guardarGastos(gasto);
    // Resetear el form
    setNombre("");
    setCantidad(0);
  };
  return (
    <div>
      <h2>Agrega tus gastos aquí</h2>
      {error && (
        <Error mensaje="Todos los campos son oblicatorios o Presupuesto incorrecto" />
      )}
      <form onSubmit={handleSubmit}>
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />

        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={(e) => setCantidad(parseInt(e.target.value))}
          value={cantidad}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar gasto"
        />
      </form>
    </div>
  );
};

Formulario.propTypes = {
  guardarGastos: PropTypes.func.isRequired,
};
