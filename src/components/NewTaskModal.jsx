import { useState } from "react";

export default function NewTaskModal({ onCreate, onClose }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const handleCreate = () => {
    if (!title) return;

    onCreate(title, status);
    setTitle("");
    setStatus("todo");
    onClose();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Nova Tarefa</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nome da tarefa"
        className="border p-2 rounded w-full mb-4"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      >
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>

      <button
        onClick={handleCreate}
        className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded w-full"
      >
        Criar tarefa
      </button>
    </div>
  );
}