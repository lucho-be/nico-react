import './App.css'
import Tarjeta from './components/Tarjeta'
import Header from './components/Header'

function App() {
  
  return (
    <body>
      <Header />
      <div className="tarjetas">
      <Tarjeta titulo="Deuda actual" moneda="dolar"/>
      <Tarjeta titulo="Deuda en pesos" moneda="pesos"/>
      <Tarjeta titulo="Valor USD blue" moneda="pesos"/>
      </div>
    </body>
  )
}

export default App
