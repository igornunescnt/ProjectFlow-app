export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold mb-4">Novo Projeto</h2>
            {/* Botão fechar */}
            <button
              onClick={onClose}
              className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded"
            >
              ✕
            </button>
        </div>

        {children}
      </div>
    </div>
  );
}