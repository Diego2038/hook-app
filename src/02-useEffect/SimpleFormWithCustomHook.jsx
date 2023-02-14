import { useEffect, useState } from "react"; 
import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {

  

  const { formState, onInputChange, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  // const { username, email, password } = formState;
  
  return (
    <>
      <h1>Formulario simple con Custom Hook</h1>

      <hr/>

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username" 
        value={ username }
        onChange={ onInputChange }
        tabIndex="1"
        />
      
      <input 
        type="email"
        className="form-control my-2"
        placeholder="someone@email.com"
        name="email" 
        value={ email }
        onChange={ onInputChange }
        tabIndex="3 "
      />

      <input
        type={"password"}
        className="form-control my-2"
        placeholder="Password"
        name="password"
        value={ password }
        onChange={ onInputChange }
        tabIndex="2"
      /> 

      <button 
        className="btn btn-primary mt-2"
        onClick={ onResetForm }
      >Reset</button>

    </>
  )
}
