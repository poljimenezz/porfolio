import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
    //consultamos a la API
    const consultarAPI= async () =>{
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=0e589d2ba3b146818434a37ed44598e9`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles)
    }
    consultarAPI();

  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
