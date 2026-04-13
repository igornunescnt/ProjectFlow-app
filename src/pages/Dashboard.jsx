import { useState } from "react";
import NewProject from "../components/NewProject";
import ProjectList from "../components/ProjectList";
import Modal from "../components/Modal";

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Projetos</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Novo Projeto
        </button>
      </div>

      <ProjectList />

      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <NewProject closeModal={() => setOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}