const Modal = ({ image, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg flex justify-center items-center z-50">
        <div className="relative p-4 max-w-5xl w-full">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-700 transition"
          >
            <X size={28} />
          </button>
  
          {/* Enlarged Image with Smooth Transition */}
          <motion.img
            src={image}
            alt="Full Project View"
            className="w-full max-h-[85vh] object-contain rounded-lg scale-110"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    );
  };

export default Modal;