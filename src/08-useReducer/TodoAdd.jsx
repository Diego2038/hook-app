 
import { useForm } from "../hooks";


export const TodoAdd = ({ onNewTodo }) => {

  const { description , onInputChange, onResetForm } = useForm({
    description: '', 
  });
   

  const sendTodo = ( event ) => {
    event.preventDefault();   
    if ( description.length < 2 ) return;
    const newTodo = {
      description,
      done: false,
      id: new Date().getTime()  
    }
    onNewTodo( newTodo );
    onResetForm();
  }


  return (
    <>
      <form onSubmit={ sendTodo }>
        <input
          name="description"
          value={ description }
          onChange={ onInputChange }  
          type="text"
          placeholder="What is to do"
          className="form-control" />
        <button  
          type="submit"
          className="btn btn-secondary mt-2">
          Add
        </button>
      </form>
    </>
  )
}
