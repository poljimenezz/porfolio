import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";
//https://home.openweathermap.org/api_keys
function App() {

  //State con los datos entrados en el formulario 
  const [busqueda, guardarBusqueda] = useState({
    ciudad:'',
    pais:''
  })

  const [consultar, guardarConsultar] = useState(false)
  const [resultado, guardarResultado] = useState({})
  const [error, guardarError] = useState(false)

  useEffect(() => {
    const consultarApi = async () =>{
      if(consultar){
        const appId= 'aeefa36297470e6684ce457d88eba54a'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${busqueda.ciudad},${busqueda.pais}&appid=${appId}`;
        //Petición a la API en función de los datos entrados por el usuario
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        
        guardarResultado(resultado)
        //Volvemos a cambiar el State consultar para que se pueda hacer más de una peticion
        guardarConsultar(false)

          //Comprovando si hay algún error en la consulta realizada por el usuario
          if(resultado.cod==='404'){
            guardarError(true);
          }else{
            guardarError(false);
          }
      }
    }
    consultarApi()
    // eslint-disable-next-line
  }, [consultar])

let componente;
if(error){
  componente = <Error mensaje="No hay resultados" />
}else{
  componente = <Clima resultado={resultado} />
}
  
  return (
      <Fragment>
          <Header 
            titulo='Clima React App'
          />
          <div className="contenedor-form">
              <div className="container">
                <div className="row">
                  <div className="col m6 s12">
                    <Formulario 
                      busqueda={busqueda}
                      guardarBusqueda={guardarBusqueda}
                      guardarConsultar={guardarConsultar}
                    />
                  </div>
                  <div className="col m6 s12">
                    {componente }
                  </div>
                </div>
              </div>
          </div>
      </Fragment>
    );
}

export default App;
