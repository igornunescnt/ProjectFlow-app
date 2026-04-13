import { useDraggable } from "@dnd-kit/core";
import { useProjectStore } from "../store/useProjectStore";
import { useParams } from "react-router-dom";

export default function Task({ task }) {
  const { id } = useParams();

  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({ id: task.id });

  const finishTask = useProjectStore((state) => state.finishTask);

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    transition: "transform 0.2s ease",
  };

  const isDone = task.status === "done";

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`p-3 rounded-xl shadow-sm border transition hover:shadow-md
        ${isDone ? "bg-green-50 border-green-200" : "bg-white border-gray-200"}
      `}
    >
      {/* DRAG HANDLE */}
      <div
        {...listeners}
        {...attributes}
        className="cursor-grab text-gray-400 text-xs mb-1"
      >
        ⠿ arrastar
      </div>

      <p className={isDone ? "line-through text-gray-500" : ""}>
        {task.title}
      </p>

      {!isDone && (
        <button
          onClick={() => finishTask(id, task.id)}
          className="text-green-600 text-xs mt-2"
        >
          Finalizar
        </button>
      )}
    </div>
  );
}