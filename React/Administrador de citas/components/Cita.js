//En este componente se muestran todas las citas que crea el usuario
import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    return ( 
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
            <button
                className="button eliminar u-full-width"
                //Se tiene que crear un arrow function sino se ejecuta la función aún sin dar click
                onClick={() =>eliminarCita(cita.id)}
            >Eliminar &times; 
            </button>
        </div>
     );
}

Cita.propTypes={
    Cita: PropTypes.object,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;