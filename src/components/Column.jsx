import { useDroppable } from "@dnd-kit/core";

export default function Column({ id, title, children }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200"
    >
      <h2 className="font-semibold text-gray-700 mb-4">
        {title}
      </h2>

      <div className="space-y-2">{children}</div>
    </div>
  );
}