import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProjectStore = create(
  persist(
    (set) => ({
      projects: [],

      addProject: (project) =>
        set((state) => ({
          projects: [...state.projects, { ...project, tasks: [] }],
        })),

      removeProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        })),

      addTask: (projectId, task) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === projectId
              ? {
                  ...project,
                  tasks: [...(project.tasks || []), task],
                }
              : project,
          ),
        })),

      moveTask: (projectId, taskId, newStatus) =>
        set((state) => ({
          projects: state.projects.map((project) => {
            if (project.id !== projectId) return project;

            return {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task,
              ),
            };
          }),
        })),

      finishTask: (projectId, taskId) =>
        set((state) => ({
          projects: state.projects.map((project) => {
            if (project.id.toString() !== projectId.toString()) return project;

            return {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id.toString() === taskId.toString()
                  ? { ...task, status: "done" }
                  : task,
              ),
            };
          }),
        })),
    }),
    {
      name: "project-storage",
    },
  ),
);
