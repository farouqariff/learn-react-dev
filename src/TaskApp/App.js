import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { TasksProvider } from "../TaskAppRC/TasksContext.js";

export default function TaskApp() {
  return (
    <TasksProvider>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Day off in Kyoto
        </h1>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  );
}
