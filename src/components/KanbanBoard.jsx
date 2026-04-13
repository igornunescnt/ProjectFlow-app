import { useState } from "react";
import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import Column from "./Column";
import Task from "./Task";
import Modal from "./Modal";
import NewTaskModal from "./NewTaskModal";

import { useParams } from "react-router-dom";
import { useProjectStore } from "../store/useProjectStore";

const columns = [
  { id: "todo", title: "To Do" },
  { id: "doing", title: "Doing" },
  { id: "done", title: "Done" },
];

export default function KanbanBoard() {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const projects = useProjectStore((state) => state.projects);
  const addTask = useProjectStore((state) => state.addTask);
  const moveTask = useProjectStore((state) => state.moveTask);

  const project = projects.find((p) => p.id.toString() === id);

  if (!project) return null;

  const tasks = project.tasks || [];

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    moveTask(project.id, active.id, over.id);
  }

  return (
    <div className="flex flex-col h-full">
      {/* BOTÃO */}
      <button
        onClick={() => setOpenModal(true)}
        className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full md:w-fit"
      >
        + Nova Tarefa
      </button>

      {/* MODAL */}
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <NewTaskModal
            onCreate={(title, status) =>
              addTask(project.id, {
                id: Date.now(),
                title,
                status,
              })
            }
            onClose={() => setOpenModal(false)}
          />
        </Modal>
      )}

      {/* 🔥 KANBAN RESPONSIVO REAL */}
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="flex overflow-x-auto gap-4 pb-4 flex-1">
          {columns.map((col) => {
            const columnTasks = tasks.filter(
              (t) => t.status === col.id
            );

            return (
              <div
                key={col.id}
                className="flex-shrink-0 w-[90%] sm:w-[350px] md:flex-1 md:w-auto"
              >
                <Column id={col.id} title={col.title}>
                  {columnTasks.length === 0 && (
                    <p className="text-gray-400 text-sm">
                      Nenhuma tarefa
                    </p>
                  )}

                  {columnTasks.map((task) => (
                    <Task key={task.id} task={task} />
                  ))}
                </Column>
              </div>
            );
          })}
        </div>
      </DndContext>
    </div>
  );
}