import { useState } from "react";
import { useTasks, useTasksDispatch } from "../TaskAppRC/TasksContext";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <div className="flex items-center space-x-2">
        <input
          className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-300"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button
          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </div>
    );
  } else {
    taskContent = (
      <div className="flex items-center space-x-2">
        <span className="text-gray-800">{task.text}</span>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>
    );
  }
  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        className="h-4 w-4 text-blue-500 rounded focus:ring focus:ring-blue-300"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
