export default function Button({ text, disabled }) {
  return (
    <button
      type="button"
      className={`btn btn-success ${disabled ? "disabled" : ""}`}
      data-bs-toggle="modal"
      data-bs-target="#registrarPagoModal"
      disabled={disabled}
    >
      {text}
    </button>
  );
}