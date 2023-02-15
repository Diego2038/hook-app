import { useState } from "react"



export const useCounter = ( initialValue = 1 ) => {

  const [counter, setCounter] = useState( initialValue );

  const incrementCounter = ( value = 1 ) => setCounter( counter + value );

  const subtractCounter = () => setCounter( count => count - 1 );
  
  const resetCounter = ( val ) => setCounter( count => val );

  return {
    counter,
    incrementCounter,
    subtractCounter,
    resetCounter
  }
}