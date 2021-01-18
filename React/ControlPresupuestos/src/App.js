import React, { useState, useEffect }  from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listados from './components/Listados'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {
  const [presupuesto, guardarPresupesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  //En este state recogeremos los gastos que vaya entrando el usuario
  const [gasto, guardarGasto] = useState({})
  const [creargasto, guardarCrearGasto] = useState(false)

//UseEffect que actualiza el presupuesto restante
  useEffect(() =>{
    //Agregamos el nuevo gasto
    if(creargasto){
      guardarGastos([
        ...gastos,
        gasto
      ])

      //Restamos el gasto del presupuesto
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante);
    }
    guardarCrearGasto(false)
    
  }, [gasto, creargasto, gastos, restante])

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ?
          (
            <Pregunta
            guardarPresupesto = {guardarPresupesto}
            guardarRestante = {guardarRestante}
            actualizarPregunta= {actualizarPregunta}
          />
          ) : 
          (
            <div className="row">
            <div className="one-half column">
              <Formulario 
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
            </div>
            <div className="one-half column">
              <Listados 
                gastos = {gastos}
              />
              <ControlPresupuesto
                  presupuesto = {presupuesto}
                  restante = {restante}
              />
            </div>
          </div>
          )
          
          }
          
          
        </div>
      </header>
    </div>
  );
}

export default App;
