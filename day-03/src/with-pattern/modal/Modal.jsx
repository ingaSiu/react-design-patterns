const Modal = ({ children }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {children}
        <button className="modal-close">✖</button>
      </div>
    </div>
  );
};

export default Modal;
