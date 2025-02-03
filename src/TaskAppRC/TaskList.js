import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <div className="flex items-center space-x-2">
        <input
          className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-300"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
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
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </label>
  );
}
