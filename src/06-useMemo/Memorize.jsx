import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";


export const Memorize = () => {

  const [show, setShow] = useState(false);

  const { counter, incrementCounter } = useCounter(1);
  return (
    <> 
      <h1> Counter: <Small value={ counter } /></h1>
      <hr />
      <button className="btn btn-primary m-2" onClick={ () => incrementCounter() } >Increase</button>
      <button
        className="btn btn-outline-primary"
        onClick={ () => setShow( !show ) }>
        Show/Hide { JSON.stringify( show ) }
      </button>
    </>
  )
}
