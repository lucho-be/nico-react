export default function Historial({ pagos }) {
  return (
    <div>
      <h3>Historial de pagos</h3>

      {pagos.length === 0 && <p>No hay pagos registrados.</p>}

      {pagos.map((p, i) => (
        <div key={i}>
          <strong>${p.importe} USD</strong> — {p.fecha}
        </div>
      ))}
    </div>
  );
}