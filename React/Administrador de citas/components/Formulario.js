import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
const { v4: uuid } = require('uuid');

const Formulario = ({crearCita}) => {

    //Creando el state cita, que será un objeto y dentro cogemos todos los name="" de cada input del formulario
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })
    //State error para validación de formulario
    const [error, actualizarError] = useState(false)
    //En la siguiente función se actualiza el State agregando a los campos del objeto el valor que entre el usuario
    const actualizarState = (e) => {
        
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }
    //validación de formulario, asignación de ID y creación de nueva cita
    const submitCita = (e) => {
        e.preventDefault()
        if(cita.mascota.trim() === '' || cita.propietario.trim() === '' || cita.fecha.trim() === '' || cita.hora.trim() === '' ||
            cita.sintomas.trim() === ''){
                actualizarError(true)
                return;
            }
        actualizarError(false)
        //assignamos ID a cada cita que se cree
        cita.id = uuid();
        //creando cita
        crearCita(cita)
        //reinicio de formulario
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })

        
    }

    return ( 
        <Fragment>
            <h1>Pedir cita</h1>
            {error? <p className="alerta-error">Todos los campos son obligatorios</p>: null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre de la mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={cita.mascota}
                />

                <label>Nombre del propietario</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre propietario de la mascota"
                    onChange={actualizarState}
                    value={cita.propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={cita.fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={cita.hora}
                />

                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={cita.sintomas}
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Pedir cita</button>
            </form>
        </Fragment>
     );
}
 
Formulario.propTypes={
    crearCita: PropTypes.func.isRequired
}

export default Formulario;