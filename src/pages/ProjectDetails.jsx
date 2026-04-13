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
        <h1 className="text-2xl md:text-3xl font-bold">
          {project.name}
        </h1>
        <p className="text-gray-400 text-sm">
          Gerencie suas tarefas
        </p>
      </div>

      <KanbanBoard />
    </div>
  );
}