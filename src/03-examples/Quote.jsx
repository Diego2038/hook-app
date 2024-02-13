import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ( { auth, quote }  ) => {

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0});

  const pRef = useRef();

  useLayoutEffect(() => {
    console.log( pRef.current.getBoundingClientRect() );
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
    return () => console.log('Se terminó :(');
  }, [  ]);


  return (
    <> 
      <li className="m-2">
        <blockquote
          className="blockquote text-end"
          style={{display: "flex", color: "blue"}}>
          <p className="mb-1" ref={ pRef } >{ quote }</p>
          <footer className="blockquote-footer">-  { auth }</footer>
          
        </blockquote>
      </li>
      <code>
        { JSON.stringify( boxSize )}
      </code>
    </>
  )
}
