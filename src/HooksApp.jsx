import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks"
import { SimpleForm } from "./02-useEffect/SimpleForm"
import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook"
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks"

export const HooksApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      {/* <CounterApp/> */}
      {/* <CounterWithCustomHooks/> */}
      {/* <SimpleForm/> */}
      {/* <SimpleFormWithCustomHook/> */}
      <MultipleCustomHooks/>
    </>
  )
}
