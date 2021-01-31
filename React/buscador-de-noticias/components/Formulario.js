import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const Opciones = [
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'},
        {value:'entretainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deportes'},
        {value:'technology', label:'Tecnología'}
    ]
    
    const [ categoria, SelectNoticias ] = useSelect('general', Opciones);

    //Submit al form, le pasamos la categoria elegida a App.js
    const buscarNoticias = (e) => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por categoría</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;