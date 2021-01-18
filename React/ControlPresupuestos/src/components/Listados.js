//Componente para listar todos los gastos
import React from 'react';
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listados = ({gastos}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Lista</h2>
            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id} 
                    gasto={gasto}
                />
            ))}
        </div>

     );
}

//Documentación
Listados.propTypes ={
    gastos: PropTypes.array.isRequired
}
 
export default Listados;