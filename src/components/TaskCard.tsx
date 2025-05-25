import { useDrag } from "react-dnd";
import { Task } from "../types";
import { useRef } from "react";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  drag(ref);

  return (
    <div
      ref={ref}
      className={`p-4 mb-2 rounded-lg shadow ${
        isDragging ? "opacity-50" : "opacity-100"
      } bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200`}
    >
      <h3 className="font-bold">{task.title}</h3>
      <p className="text-sm mt-1">{task.description}</p>
    </div>
  );
};

export default TaskCard;
