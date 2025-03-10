export function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          {children}
          <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    );
  }export default Modal;