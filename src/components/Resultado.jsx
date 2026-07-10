function Resultado({ imc }) {
  return (
    <div className="resultado">
      <p>Seu IMC é:</p>
      <strong>{imc.toFixed(2)}</strong>
    </div>
  )
}

export default Resultado
