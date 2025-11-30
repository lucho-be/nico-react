import { useState } from "react";

export default function Button({ text }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setModal(true)}
      >
        {text}
      </button>

      {/* {modal && <Modal onClose={() => setModal(false)} />} */}
    </>
  );
}
