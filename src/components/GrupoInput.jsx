import PropTypes from "prop-types";
import React from "react"

export const GrupoInput =(props) => {
    const {tipo, etiqueta, id, min, step, valor, aoDigitar } = props;
    return(
        <div className="form-group col">
            <label htmlFor={id}>{etiqueta}</label>
            <input type={tipo} id={id} className="form-control" min={min} step={step} value={valor} required onChange={aoDigitar} />
        </div>
    )
}

GrupoInput.propTypes = {
    tipo: PropTypes.string.isRequired,
    etiqueta: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    min: PropTypes.number,
    step: PropTypes.number,
    valor: PropTypes.string.isRequired,
    aoDigitar: PropTypes.string.isRequired,
};