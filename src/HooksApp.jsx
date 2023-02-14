import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks"
import { SimpleForm } from "./02-useEffect/SimpleForm"
import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook"

export const HooksApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      {/* <CounterApp/> */}
      {/* <CounterWithCustomHooks/> */}
      {/* <SimpleForm/> */}
      <SimpleFormWithCustomHook/>
    </>
  )
}
