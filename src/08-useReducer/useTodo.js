import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

const useTodo = ( initialState = [] ) => {

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "Remove Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "Toggle Todo",
      payload: id,
    };

    dispatch(action);
  };
  
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };

};

export default useTodo;
