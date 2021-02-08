import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'
export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    
    const [recetas, guardarRecetas] = useState([])
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria:''
    })
    const [consultar, guardarConsultar] = useState(false);

    useEffect(() => {
        if (consultar){
            const obtenerRecetas = async () =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`

                const res = await axios.get(url)

                guardarRecetas(res.data.drinks)
            }
            obtenerRecetas()

        }
    }, [busqueda, consultar])

    return(
        <RecetasContext.Provider
        value={{
            buscarRecetas,
            guardarConsultar,
            recetas
        }}
        >
            {props.children}
        </RecetasContext.Provider>
    )

}

export default RecetasProvider;
