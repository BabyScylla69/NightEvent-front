import { useEffect, useRef } from "react";

const RegisterForm = ({ openModal, closeModal }) => {
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
      <div>
        <input type="text" />
        <input type="password" />
        <button>Submit</button>
      </div>
    </dialog>
  );
}

export default RegisterForm;