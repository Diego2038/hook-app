import { useEffect, useState } from "react";

export const Message = () => {

  /* useEffect(() => {
    console.log('Message mounted');
  
    return () => {
      console.log('Message unmounted');  
    }
  }, []); */

  const [cords, setCords] = useState({x:0,y:0});

  useEffect(() => {

     
    const onMouseMove = ( { x, y } ) => {
      setCords({ x, y });
      // console.log( cords ); 
    }
    window.addEventListener('mousemove', onMouseMove ); 
  
    return () => {
      // window.removeEventListener('mousemove',onMouseMove);
      console.log("Aquí terminó 😭👌");
    }
  }, [])
  
  

  return (
    <>
      <h3>User already exists</h3>
      {
        JSON.stringify( cords )
      }
    </>
  )
}
