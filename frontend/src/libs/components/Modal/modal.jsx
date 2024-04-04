import PropTypes from "prop-types";

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-20 bg-white p-4 rounded-md">
        <span
          className="absolute top-0 right-0 p-2 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
