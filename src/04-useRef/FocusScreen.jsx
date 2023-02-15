import { useRef } from "react";


export const FocusScreen = () => {

  const selectOnClick = () => {
    // document.querySelector('input').select();
    console.log( ref );
    ref.current.select();

  }

  const ref = useRef();

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input 
        type="text" 
        placeholder="Insert your name"
        className="form-control"/>
      <input 
        ref={ ref }
        type="text" 
        placeholder="Insert your name"
        className="form-control"/>
      <input 
        type="text" 
        placeholder="Insert your name"
        className="form-control"/>
      <input 
        type="text" 
        placeholder="Insert your name"
        className="form-control"/>

      <button
        className="btn btn-primary mt-2"
        onClick={ () => selectOnClick() }>
        Set focus
      </button>
    </>
  )
}
