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
    console.log("use Effect");
    increment();
   }, 
   [ increment ]); //! Sólo se renderiza cuando increment se modifica (además de hacerlo por primera vez), lo cual no pasará porque usa un useCallback
  
  

  // const increment = () => {
  //   setCounter( counter + 1);
  // }

  return (
    <>
      <h1>Callback component hook: { counter }</h1>
      <hr />
      <ShowIncrement increment={ increment } loquesea="con memo" />
      <hr/>
      <ShowIncrement increment={ () => setCounter( (count) =>  count + 2) } loquesea={"sin memo"} />
    </>
  )
}
