import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'pepe',
    email: 'pepe@email.com'
  });

  const { email, username } = formState;
  console.log("por aquí pasé");
   

  const onInputChange = ( { target } ) => {
    console.log({target});
    const { name, value } = target;
    
    setFormState( ( form ) => ({
      ...form,
      [ name ]: value 
    }));
  }

  useEffect( () => {
    console.log('useEffect called');
  }, []);
  
  useEffect( () => {
    console.log('form changed');
  }, [ formState ]);
  
  useEffect( () => {
    console.log('email changed');
  }, [  email ]);

  return (
    <>
      <h1>Formulario simple</h1>

      <hr/>

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username" 
        value={ username }
        onChange={ onInputChange }/>
      
      <input 
        type="email"
        className="form-control my-2"
        placeholder="someone@email.com"
        name="email" 
        value={ email }
        onChange={ onInputChange }
      />

      {
        (username === 'strider2') && <Message/>
      }

    </>
  )
}
