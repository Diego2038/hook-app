import { useCallback, useEffect, useState } from "react"; 
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

  const [counter, setCounter] = useState( 10 );

  const increment = useCallback(
    ( val = 1 ) => {
      console.log('setCounter (counter + 1 )');
      setCounter( (count) =>  count + val);
    },
    [],
  );

  useEffect(() => {
    increment();
   }, 
   [ increment ]);
  
  

  // const increment = () => {
  //   setCounter( counter + 1);
  // }

  return (
    <>
      <h1>Callback component hook: { counter }</h1>
      <hr />
      <ShowIncrement increment={ increment } />
    </>
  )
}
