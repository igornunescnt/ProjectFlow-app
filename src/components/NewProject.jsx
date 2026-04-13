import { useState } from "react";
import { useProjectStore } from "../store/useProjectStore";
import { v4 as uuidv4 } from "uuid";

export default function NewProject({ closeModal }) {
  const [name, setName] = useState("");
  const addProject = useProjectStore((state) => state.addProject);

  const handleCreate = () => {
    if (!name) return;

        addProject({
            id: Date.now(),
            name,
        });

        setName("");

        if (closeModal) closeModal();
    };

  return (
    <div className="mb-4 flex gap-2">
      <input
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Nome do projeto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={handleCreate}
        className="bg-blue-500 text-white px-4 rounded"
      >
        Criar
      </button>
    </div>
  );
}