import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import ListadoImagenes from './components/ListadoImagenes'
//https://pixabay.com/api/docs/

function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  //State que nos indica en que página estamos (paginador)
  const [paginaactual, guardarPaginaActual] = useState(1);
  //State que nos indica las páginas que hay en total (paginador)
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {

    const consultarApi= async () =>{
      if (busqueda === '') return;
      const imagenesPorPagina = 30;
      const key = '20092924-03679efbf66538ca22918fac3'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page${imagenesPorPagina}&page=${paginaactual}`

      //Petición a la api
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits)

      //Calcular el total de páginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);

      //Mover la pantalla hacia arriba
      const jumbotron =  document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'});

    }
    consultarApi()
    
  }, [busqueda,paginaactual])

  //Definimos la página anterior
  const paginaAnterior = () =>{
    
    const nuevaPaginaActual = paginaactual - 1;
    
    if(nuevaPaginaActual <= 0) return;

    guardarPaginaActual(nuevaPaginaActual)
  }

  //Definimos la página siguiente
  const paginaSiguiente = () =>{
    
    const nuevaPaginaActual = paginaactual + 1;
    
    if(nuevaPaginaActual > totalpaginas) return;

    guardarPaginaActual(nuevaPaginaActual)
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes={imagenes}
        />

      { (paginaactual === 1) ? null :(
        <button
          type="button"
          className="bbtn btn-info mr-1"
          onClick={paginaAnterior}
        >&laquo; Anterior</button>
      )}
      
      { (paginaactual===totalpaginas) ? null : (
        <button
          type="button"
          className="bbtn btn-info"
          onClick={paginaSiguiente}
        >Siguiente &raquo; </button>
      )}

      </div>
    </div>
  );
}

export default App;
