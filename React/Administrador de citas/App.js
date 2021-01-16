import React, {Fragment, useState , useEffect} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {
  //Obtenemos las citas del local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if (!citasIniciales){
    citasIniciales = []
  }

  //State donde se irán guardando todas las citas que se creen
  const [citas, guardarCitas] = useState(citasIniciales)

  const crearCita = (cita) =>{
    guardarCitas([...citas, cita])
  }

  const eliminarCita = (id) =>{
    //Hacemos un filter para quitar la cita con el id que pasamos por parámetro
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }

  let titulo = ""
  if(citas.length===0){
    titulo= 'No hay citas'
  }
  else{
    titulo = 'Administrar citas'
  }

  useEffect(()=>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas])

  return (
    <Fragment>

      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Cita 
                //obligado pasar la key
                key = {cita.id}
                cita = {cita}
                eliminarCita = {eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>

    </Fragment>
    
  );
}

export default App;
