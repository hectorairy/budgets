import React from "react";
import PropTypes from "prop-types";

export const Error = ({ mensaje }) => {
  return <div className="alert alert-danger error">{mensaje}</div>;
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};
