//Componente para mostrar el nombre y la cantidad de cada gasto en concreto
import React from 'react';
import PropTypes from "prop-types";

const Gasto = ({gasto}) => {
    return ( 
        <li className="gastos">
            <p>
                {gasto.nombre}

                <span className="gasto">{gasto.cantidad} €</span>
            </p>
        </li>
     );
}

//Documentación
Gasto.propTypes ={
    gasto: PropTypes.object.isRequired
}

export default Gasto;