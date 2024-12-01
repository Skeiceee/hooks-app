import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import useTodo from "./useTodo";

const TodoApp = () => {
  
  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo()

  return (
    <div className="mt-2">
      <h1>TodoApp: { todosCount }, <small>Pendientes: { pendingTodosCount } </small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={ handleToggleTodo }/>
        </div>
        <div className="col-5">
          <h3>Agregar TODO</h3>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
