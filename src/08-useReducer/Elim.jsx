import { useState } from "react"


export const Elim = () => {

  const [comment, setComment] = useState('');

  const handleComment = ( event ) => {
    setComment( event.target.value )
  }

  return (
    <>
      <h1>Caja e imprimir</h1>
      <input type="text"
        value={ comment }
        onChange={ handleComment } />
    </>
  )
}
