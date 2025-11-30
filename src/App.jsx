import './App.css'
import Tarjeta from './components/Tarjeta'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Button from './components/Button';


function App() {

  const [value, setValue] = useState(null);
  const [deuda, setDeuda] = useState(0);

  async function obtenerDolarBlue() {
    try {
      const respuesta = await fetch("https://api.bluelytics.com.ar/v2/latest");
      if (!respuesta.ok) {
        throw new Error("Error al obtener los datos del dólar blue");
      }

      const datos = await respuesta.json();
      const valorBlue = datos.blue.value_sell;

      setValue(valorBlue);
    } catch (error) {
      console.error("Hubo un problema:", error.message);
    }
  }

  useEffect(() => {
    obtenerDolarBlue();
    setDeuda(3455);
  }
    , []);

  return (
    <>
      <Header />
      <div className="tarjetas">
        <Tarjeta titulo="Deuda actual" moneda="dolar" importe={deuda} />
        <Tarjeta titulo="Deuda en pesos" moneda="pesos" importe={
          value !== null
            ? (deuda * value).toLocaleString("es-AR")
            : "Cargando..."
        } />
        <Tarjeta titulo="Valor USD blue" moneda="pesos" importe={value !== null ? value.toLocaleString("es-AR") : "Cargando..."} />
      </div>
      <div className="historial">
        <h2 style={{ marginBottom: "1em" }}>Historial de pagos</h2>
        <Button text="Registrar pago"/>
        <hr />
        <p>No hay pagos realizados aún.</p>
      </div>
    </>
  )
}

export default App
