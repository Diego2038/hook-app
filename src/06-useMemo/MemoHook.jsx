import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('ahí vamos...');
  }
  return `${ iterationNumber } iteraciones realizadas`;
}


export const MemoHook = () => {

  const [show, setShow] = useState(false);

  
  const { counter, incrementCounter } = useCounter( 4000 );
  
  const memorizedValue = useMemo(() => heavyStuff( counter ), [ counter ]);

  return (
    <> 
      <h1> Counter: <small>{ counter }</small></h1>
      <hr />
      <h4>{ memorizedValue }</h4>
      <button className="btn btn-primary m-2" onClick={ () => incrementCounter() } >Increase</button>
      <button
        className="btn btn-outline-primary"
        onClick={ () => setShow( !show ) }>
        Show/Hide { JSON.stringify( show ) }
      </button>
    </>
  )
}
