import './App.css'
import Tarjeta from './components/Tarjeta'
import Header from './components/Header'
import Button from './components/Button'
import Modal from './components/Modal'

import { useState, useEffect } from 'react'
import { collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore"
import { db } from "./firebase"

function App() {

  const DEUDA_INICIAL = 3455

  const [value, setValue] = useState(null)
  const [pagos, setPagos] = useState([])

  // 👉 deuda derivada (no se guarda, se calcula)
  const deuda = pagos.reduce(
    (acc, p) => acc - p.importe,
    DEUDA_INICIAL
  )

  // ======================
  // DÓLAR BLUE
  // ======================
  async function obtenerDolarBlue() {
    try {
      const respuesta = await fetch("https://api.bluelytics.com.ar/v2/latest")
      if (!respuesta.ok) throw new Error("Error dólar blue")

      const datos = await respuesta.json()
      setValue(datos.blue.value_sell)

    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    obtenerDolarBlue()
  }, [])

  // ======================
  // FIRESTORE – LEER PAGOS
  // ======================
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "pagos"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setPagos(data)
    })

    return () => unsub()
  }, [])

  // ======================
  // AGREGAR PAGO
  // ======================
  async function agregarPago(nuevoPago) {
    await addDoc(collection(db, "pagos"), {
      importe: nuevoPago.importe,
      fecha: nuevoPago.fecha,
      createdAt: new Date()
    })
  }

  // ======================
  // ELIMINAR PAGO
  // ======================
  async function eliminarPago(id) {
    await deleteDoc(doc(db, "pagos", id))
  }

  // ======================
  // RENDER
  // ======================
  return (
    <>
      <Header />

      <div className="tarjetas">
        <Tarjeta
          titulo="Deuda actual"
          moneda="dolar"
          importe={deuda}
        />

        <Tarjeta
          titulo="Deuda en pesos"
          moneda="pesos"
          importe={
            value !== null
              ? (deuda * value).toLocaleString("es-AR")
              : "Cargando..."
          }
        />

        <Tarjeta
          titulo="Valor USD blue"
          moneda="pesos"
          importe={value !== null
            ? value.toLocaleString("es-AR")
            : "Cargando..."
          }
        />
      </div>

      <div className="historial">
        <h2 style={{ marginBottom: "1em" }}>
          Historial de pagos
        </h2>

        <Button
          text="Registrar pago"
          disabled={deuda <= 0}
        />

        <Modal onRegistrar={agregarPago} />

        <hr />

        {pagos.length === 0 && (
          <p>No hay pagos realizados aún.</p>
        )}

        {pagos.map((p) => (
          <div
            key={p.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
              marginBottom: "0.5em"
            }}
          >
            <span>
              <strong>${p.importe} USD</strong> —{" "}
              {new Date(p.fecha).toLocaleDateString("es-AR")}
            </span>

            <i
              className="bi bi-trash"
              style={{ cursor: "pointer", color: "crimson" }}
              onClick={() => eliminarPago(p.id)}
              title="Eliminar pago"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
