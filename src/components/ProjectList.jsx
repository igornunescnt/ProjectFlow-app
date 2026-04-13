import { useProjectStore } from "../store/useProjectStore";
import { useNavigate } from "react-router-dom";

export default function ProjectList() {
  const projects = useProjectStore((state) => state.projects);
  const removeProject = useProjectStore((state) => state.removeProject);
  const navigate = useNavigate();


  return (
    <div className="space-y-2">
        {projects.length === 0 && (
            <p className="text-gray-500">Nenhum projeto criado ainda</p>
        )}

      {projects.map((project) => (
        <div
            onClick={() => navigate(`/project/${project.id}`)}
            className="bg-white p-4 rounded shadow flex justify-between cursor-pointer hover:shadow-md transition"
            key={project.id}
        >
          <span>{project.name}</span>

          <button
            onClick={() => removeProject(project.id)}
            className="text-red-500 hover:text-red-700 transition"
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}