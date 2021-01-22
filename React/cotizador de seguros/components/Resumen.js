import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import {primerMayuscula} from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;

`

const Resumen = ( {resumen}) => {
    return (
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primerMayuscula(resumen.datos.marca)} </li>
                <li>Plan: {primerMayuscula(resumen.datos.plan)}</li>
                <li>Año del coche: {resumen.datos.year}</li>
            </ul>
        </ContenedorResumen> 
     );
}

Resumen.propTypes = {
    resumen: PropTypes.object.isRequired
}
 
export default Resumen;