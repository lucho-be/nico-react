export default function Modal({ onRegistrar }) {

  function handleRegistrar() {
    const importe = document.getElementById("importePagado").value;
    const fecha = document.getElementById("fechaPago").value;

    if (!importe || !fecha) {
      alert("Completá todos los campos");
      return;
    }

    onRegistrar({
      importe: Number(importe),
      fecha
    });

    document.getElementById("cerrarModal").click();

  }

  return (
    <div
      className="modal fade"
      id="registrarPagoModal"
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Registrar pago</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>

          <div className="modal-body">
            <label className="form-label" style={{ fontSize: "14px", color: "gray" }}>
              Importe entregado en $USD
            </label>

            <div className="input-group mb-3">
              <span className="input-group-text">$USD</span>
              <input
                type="number"
                className="form-control"
                id="importePagado"
                min="1"
                required
              />
              <span className="input-group-text">.00</span>
            </div>

            <label className="form-label" style={{ fontSize: "14px", color: "gray" }}>
              Fecha de pago
            </label>

            <input
              type="date"
              className="form-control"
              id="fechaPago"
              required
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleRegistrar}
            >
              Registrar
            </button>
            <button
  type="button"
  className="btn-close d-none"
  id="cerrarModal"
  data-bs-dismiss="modal"
/>

          </div>

        </div>
      </div>
    </div>
  );
}
