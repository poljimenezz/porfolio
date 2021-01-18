//Componente con el formulario para introducir un gasto nuevo
import React, {useState} from 'react';
import Error from "./Error";
import shortid from 'shortid'
import PropTypes from "prop-types";

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    //Función donde miraremos que es gasto este OK, y en el caso de que lo esté, crearemos nuevo gasto
    const agregarGasto = (e) =>{
        e.preventDefault();
        if (cantidad<1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        //Le pasamos el gasto al state creado en el componente principal Gasto
        guardarGasto(gasto)
        guardarCrearGasto(true)
        //Reseteamos el formulario
        guardarNombre('')
        guardarCantidad(0)
    }
    return ( 
        <form
            onSubmit= {agregarGasto}
        >
            <h2>Agrega tus gastos aquí:</h2>
            {error ? <Error mensaje = "Ambos casos son obligatorios o presupuesto incorrecto" />: null}
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e=>guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad de gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e=>guardarCantidad(e.target.value)}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />

            
        </form>
     );
}

//Documentación
Formulario.propTypes ={
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;