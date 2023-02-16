import { useReducer, useEffect } from "react"; 
import { todoReducer } from "../08-useReducer/todoReducer";

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

export const useTodo = () => {

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

  return {
    todos,
    todosAll: todos.length,
    todosPending: todos.filter( todo => !todo.done ).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo
  }

}