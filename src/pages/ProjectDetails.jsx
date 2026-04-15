import { useParams } from "react-router-dom";
import { useProjectStore } from "../store/useProjectStore";
import KanbanBoard from "../components/KanbanBoard";

export default function ProjectDetails() {
  const { id } = useParams();
  const projects = useProjectStore((state) => state.projects);

  const project = projects.find((p) => p.id.toString() === id);

  if (!project) return <p>Projeto não encontrado</p>;

  return (
    <div className="flex flex-col h-full">
      {/* HEADER */}
      <div className="mb-4">
        <h1 className="text-xl md:text-2xl font-bold mt-2">Projeto Drying</h1>

        <p className="text-sm text-gray-500 mb-4">Gerencie suas tarefas</p>
      </div>

      <KanbanBoard />
    </div>
  );
}
