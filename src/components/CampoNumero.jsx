function CampoNumero({ label, valor, aoMudar, placeholder }) {
  return (
    <div className="campo">
      <label>{label}</label>
      <input
        type="number"
        value={valor}
        onChange={(e) => aoMudar(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default CampoNumero
