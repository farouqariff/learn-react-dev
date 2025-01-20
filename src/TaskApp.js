import { useState } from "react";
import { useImmer } from "use-immer";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  //   const [todos, setTodos] = useState(initialTodos);
  const [todos, updateTodos] = useImmer(initialTodos);

  function handleAddTodo(title) {
    // setTodos([...todos, { id: nextId++, title: title, done: false }]);
    updateTodos((todo) => {
      todo.push({
        id: nextId++,
        title: title,
        done: false,
      });
    });
  }

  function handleChangeTodo(nextTodo) {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === nextTodo.id) {
    //       return { ...todo, title: nextTodo.title, done: nextTodo.done };
    //     } else {
    //       return todo;
    //     }
    //   })
    // );
    updateTodos((todo) => {
      todo.title = nextTodo.title;
      todo.done = nextTodo.done;
    });
  }

  function handleDeleteTodo(todoId) {
    updateTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
