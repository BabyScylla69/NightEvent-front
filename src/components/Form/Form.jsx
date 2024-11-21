import { useEffect, useRef } from "react";

const Form = ({ openModal, closeModal, children }) => {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal}>
      <button onClick={closeModal}>X</button>
      {children}
    </dialog>
  );
}

export default Form;