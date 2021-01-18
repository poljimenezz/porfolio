//Componente error, reaprovechado por varios componentes en el caso de error.
import React from 'react';
import PropTypes from "prop-types";

const Error = ({mensaje}) => {
    return ( 
        <p className="alert alert-danger error">{mensaje}</p>
     );
}

//Documentación
Error.propTypes ={
    mensaje: PropTypes.string.isRequired
}
 
export default Error;