import { useDrop } from "react-dnd";
import { Status, Task } from "../types";
import TaskCard from "./TaskCard";
import useTaskStore from "../store/useTaskStore";
import { useRef } from "react";

interface ColumnProps {
  status: Status;
  title: string;
  tasks: Task[];
}

const Column = ({ status, title, tasks }: ColumnProps) => {
  const moveTask = useTaskStore((state) => state.moveTask);
  const ref = useRef<HTMLDivElement>(null);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: { id: number }) => moveTask(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  drop(ref);
  return (
    <div
      ref={ref}
      className={`flex-1 p-2 rounded-lg shadow-lg ${
        isOver ? "bg-gray-200 dark:bg-gray-600" : "bg-gray-100 dark:bg-gray-900"
      }`}
    >
      <h2 className="text-lg text-center font-bold mb-4 bg-gray-800 p-2 rounded-lg text-gray-200 dark:bg-gray-200 dark:text-gray-800">
        {title}
      </h2>
      <div className="space-y-2">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default Column;
