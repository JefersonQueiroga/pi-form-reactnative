import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import CampoNumero from './components/CampoNumero'
import Resultado from './components/Resultado'
import './App.css'

function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const imc = peso / (altura * altura)

  return (
    <main className="container">
      <Cabecalho titulo="Calculadora de IMC" />

      <CampoNumero
        label="Peso (kg)"
        valor={peso}
        aoMudar={setPeso}
        placeholder="Ex: 70"
      />

      <CampoNumero
        label="Altura (m)"
        valor={altura}
        aoMudar={setAltura}
        placeholder="Ex: 1.75"
      />

      <Resultado imc={imc} />
    </main>
  )
}

export default App
