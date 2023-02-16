import { useEffect, useReducer } from "react";
import { Elim } from "./Elim";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";



const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false, 
  // },  
  
  
];

const myInitXd = () => {
  return JSON.parse( localStorage.getItem( 'todos' ) ) || [] ;
}

export const TodoApp = () => {

  // * useReducer es como un useState, sólo que se utiliza cuando
  // * las variables reactivas a guardar son más complejas
  const [ todos , dispatchTodos ] = useReducer( todoReducer, initialState, myInitXd );

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispatchTodos( action );
  }

  const handleDeleteTodo = ( id ) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: id
    }
    dispatchTodos( action );
  }

  const handleToggleTodo = ( id ) => { 
    const action = {
      type: '[TODO] Toggle Todo',
      payload: id
    }
    dispatchTodos( action );
  }

  useEffect(() => { 
    localStorage.setItem( 'todos', JSON.stringify( todos ));
  }, [ todos ]);
  

  return (
    <>
      <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
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
      {/* <Elim/> */}



    </>
  )
}
