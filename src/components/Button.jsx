export default function Button ({ text }) {

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
data-bs-target="#registrarPagoModal"

      >
        {text}
      </button>
    </>
  );
}
