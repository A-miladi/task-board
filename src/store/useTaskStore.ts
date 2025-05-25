import { create } from "zustand";
import { Task } from "../types";

interface StoreState {
  tasks: Task[];
  darkMode: boolean;
  setTasks: (tasks: Task[]) => void;
  moveTask: (id: number, status: Task["status"]) => void;
  toggleDarkMode: () => void;
}

const useTaskStore = create<StoreState>((set) => ({
  tasks: [],
  darkMode: false,
  setTasks: (tasks) => set({ tasks }),
  moveTask: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      ),
    })),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useTaskStore;
