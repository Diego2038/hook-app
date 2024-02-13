import React from "react";

export const ShowIncrement = React.memo( ({ increment, loquesea='' }) => {
  console.log('Me volví a generar 😭😭😭', " ", loquesea);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => increment( 5 ) }>
        Increment
      </button>
    </>
  )
})
