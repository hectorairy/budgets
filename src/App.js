import React, { useState } from "react";
import { ControlGastos } from "./components/ControlGastos";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { Pregunta } from "./components/Pregunta";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  const guardarGastos = (gasto) => {
    setRestante(restante - gasto.cantidad);
    setGastos([...gastos, gasto]);
  };
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {mostrarPregunta ? (
          <Pregunta
            setMostrarPregunta={setMostrarPregunta}
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Formulario guardarGastos={guardarGastos} />
            </div>
            <div className="one-half column">
              <Listado gastos={gastos} />
              <ControlGastos presupuesto={presupuesto} restante={restante} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
