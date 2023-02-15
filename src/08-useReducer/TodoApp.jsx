import { useReducer } from "react";
import { todoReducer } from "./todoReducer";



const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false, 
  },
  {
    id: new Date().getTime()*3,
    description: 'Recolectar la piedra del amor',
    done: true, 
  },
  
];

export const TodoApp = () => {

  const [ todos , dispatchTodos ] = useReducer( todoReducer, initialState );

  return (
    <>
      <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {
              todos.map( todo => (
                <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                  <span className="align-self-center">Item 1</span> <button className="btn btn-danger ">Borrar</button></li>  
              ))
            }
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input 
              type="text"
              placeholder="What is to do"
              className="form-control" />
          </form>
          <button
            className="btn btn-secondary mt-2">
            Add
          </button>
        </div>

      </div>



    </>
  )
}
