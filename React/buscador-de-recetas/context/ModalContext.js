import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [ idreceta, guardarIdReceta ] = useState(null);
    const [info, guardarReceta] = useState({})

    //Cuando tengamos la receta, llamamos a la API
    useEffect(() => {
        const obtenerReceta = async () =>{
            if(!idreceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
            const res = await axios.get(url)

            guardarReceta(res.data.drinks[0])
        }
        obtenerReceta()
        
    }, [idreceta])

    return (
        <ModalContext.Provider
            value={{
                info,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;