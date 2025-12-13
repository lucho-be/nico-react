export default function Modal({ onRegistrar }) {

  function handleRegistrar() {
    const importe = document.getElementById("importePagado").value;
    const fecha = document.getElementById("fechaPago").value;

    onRegistrar({
      importe: Number(importe),
      fecha
    });
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
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <label htmlFor="importePagado" className="form-label" style={{ fontSize: "14px", color: "gray" }}>
              Importe entregado en $USD
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text">$USD</span>
              <input type="number" className="form-control" id="importePagado" />
              <span className="input-group-text">.00</span>
            </div>

            <label htmlFor="fechaPago" className="form-label" style={{ fontSize: "14px", color: "gray" }}>
              Fecha de pago
            </label>
            <div className="mb-3">
              <input type="date" className="form-control" id="fechaPago" />
            </div>
          </div>

          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-success"
              data-bs-dismiss="modal"
              onClick={handleRegistrar}
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
