import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
   
   
    const [error, guardarError] = useState(false);

    //Función que coloca los elementos en el State
    const handleChange = (e) =>{
        //Actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario de submit al form
    const handleSumbit = (e) =>{
        e.preventDefault();

        if(busqueda.ciudad.trim() ==='' || busqueda.pais.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        guardarConsultar(true);
    }

    return ( 
        <form
            onSubmit={handleSumbit}
        >
            {error ? <p className="red darken-4 error">Todos los campos son obligatorios.</p> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={busqueda.ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12" >
                <select
                    name="pais"
                    id="pais"
                    value={busqueda.pais}
                    onChange={handleChange}
                >
                    <option value="">--Seleccione un país--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}

export default Formulario
