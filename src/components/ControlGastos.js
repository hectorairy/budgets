import React from "react";
import { crearClase } from "../helpers/helpers";
import PropTypes from "prop-types";

export const ControlGastos = ({ presupuesto, restante }) => {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: $ {presupuesto}</div>
      <div className={crearClase(presupuesto, restante)}>
        Restante: $ {restante}
      </div>
    </>
  );
};

ControlGastos.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
