import React from "react"

const GrupoInput = ({label, type, id,min, step, value, required}) => {
    return(
        <div className="form-group">
            <label htmlFor={id} className="form-grou">{label}</label>
            <input type={type} id={id} className="form-control" min={min} step={step} value={value} required={required}/>
        </div>
    )
}

export default GrupoInput;
