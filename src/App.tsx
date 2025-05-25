import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./components/Column";
import { Task, Column as ColumnType } from "./types";
import useTaskStore from "./store/useTaskStore";
import tasksData from "../src/data/task.json";
import SunIcon from "./icons/sun";
import MoonIcon from "./icons/moon";

const columns: ColumnType[] = [
  { id: "todo", title: "انجام نشده" },
  { id: "inprogress", title: "در حال انجام" },
  { id: "done", title: "انجام شده" },
];

function App() {
  const { tasks, setTasks, darkMode, toggleDarkMode } = useTaskStore();

  useEffect(() => {
    setTasks(tasksData as Task[]);
  }, [setTasks]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div dir="rtl" className={`min-h-screen ${darkMode ? "dark" : ""}`}>
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen p-4">
          <div className="container mx-auto">
            <div className="flex items-center mb-8">
              <button
                onClick={toggleDarkMode}
                className=" mr-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
              >
                {darkMode ? (
                  <SunIcon color="yellow" size={25} />
                ) : (
                  <MoonIcon color="#374151" size={25} />
                )}
              </button>
            </div>

            <div className="flex max-md:flex-col w-full gap-4">
              {columns.map((column) => (
                <Column
                  key={column.id}
                  status={column.id}
                  title={column.title}
                  tasks={tasks}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
