import React , {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from 'axios'
import Error from "../components/Error";
import PropTypes from 'prop-types';


const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Formulario = ({guardarMoneda,guardarCriptomoneda}) => {
    //State que tendrá el listado de criptomonedas, que será el resultado de la petición a la API
    const [listacripto, guardarCriptomonedas] = useState([]);
    const [error, guardarError] = useState(false);

    const monedas = [
        { codigo:'USD', nombre:'Dolar de Estados Unidos' },
        { codigo:'MXN', nombre:'Peso Mexicano' },
        { codigo:'EUR', nombre:'Euro' },
        { codigo:'GBP', nombre:'Libra Esterlina' }
        
    ]
    
    //Utilizamos el hook useMoneda
    const [ moneda, SelectMonedas] = useMoneda('Elige tu moneda','', monedas);

    //Utilizamos el hook useCriptomoneda
    const [ criptomoneda, SelectCripto] = useCriptomoneda('Elige tu CriptoMoneda','', listacripto); 

    //Ejecutamos llamamiento API
    useEffect(() => {
        const consultarApi = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            
            const resultado = await axios.get(url);
            //Guardamos la respuesta de la API en el State listacripto
            guardarCriptomonedas(resultado.data.Data);
            
        }
        //llamamos la función, para que así se ejecute
        consultarApi()
    }, [])

    const cotizarMoneda = (e) =>{
        e.preventDefault();
        //Validamos si ambos campos estan llenos
        if(moneda === '' || criptomoneda===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //Pasamos los datos al componente principal
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda)

    }
    
    return ( 
        <form
            onSubmit={cotizarMoneda}
        >
        {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            <SelectMonedas />
            <SelectCripto />
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}

Formulario.propTypes = {
    guardarMoneda: PropTypes.func.isRequired,
    guardarCriptomoneda: PropTypes.func.isRequired
  }
 
 
export default Formulario;