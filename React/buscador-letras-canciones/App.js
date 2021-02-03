import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Info from './components/Info'

import axios from 'axios'


function App() {

  //En este State tendremos tanto el artista cómo la canción seleccionada por el usuario, que la recogeremos del componente Formulario.js
  const [busquedaletra, guardarBusquedaLetra]= useState({})
  //State que tendrá la letra (resultado obtenido de la consulta a la API lyrics.ovh)
  const [letra, guardarLetra] = useState('')
  //State que tendrá la información del artista (resultado obtenido de la consulta a la API theaudiodb.com)
  const [infoartista, guardarInfoArtista] = useState({})

  useEffect(() =>{
    if(Object.keys(busquedaletra).length ===0) return;

    const consultarApiLetra = async () =>{
      //Url de la API con la letra de la canción
      const url=`https://api.lyrics.ovh/v1/${busquedaletra.artista}/${busquedaletra.cancion}`
      //Url de la API con la información del artista
      const urlInfo=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busquedaletra.artista}`

      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(urlInfo)
      ])
      
      guardarLetra(letra.data.lyrics);
      guardarInfoArtista(informacion.data.artists[0])

      //Ponemos la siguiente linea para evitar loop del Effect
      guardarBusquedaLetra({});
    }
    consultarApiLetra()

  },[busquedaletra,infoartista])

  return (
    <Fragment> 
      <Formulario 
        guardarBusquedaLetra = {guardarBusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              infoartista={infoartista}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              letra = {letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
