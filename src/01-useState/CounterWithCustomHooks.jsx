import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {

  const initialValue = 6;

  const { counter, incrementCounter, subtractCounter, resetCounter } = useCounter( initialValue );
 

  return (
    <>
      <h1>Counter With Hook: { counter }</h1>
      <hr />
      <button className="btn btn-primary" onClick={ () => incrementCounter(3) }>+1</button>
      <button className="btn btn-primary" onClick={ () => resetCounter( initialValue ) }>Reset</button>
      <button className="btn btn-primary" onClick={  subtractCounter }>-1</button>
    </>
  )
}
