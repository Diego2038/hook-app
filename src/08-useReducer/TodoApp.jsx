import { useTodo } from "../hooks";
import { Elim } from "./Elim";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {

  const { todos, todosAll, todosPending, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo();

  return (
    <>
      <h1>TodoApp: { todosAll }, <small>pendientes: { todosPending }</small></h1>

      <hr />

      <div className="row">

        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
        </div> 

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>

      </div> 
      <hr />
      <Elim/> 
    </>
  )
}
