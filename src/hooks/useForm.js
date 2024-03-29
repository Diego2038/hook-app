import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
  
  const [formState, setFormState] = useState( initialForm ); 

  const onInputChange = ( { target } ) => { 
    const { name, value } = target;
    setFormState( ( form ) => ({
      ...form,
      [ name ]: value 
    }));
  }

  const onResetForm = () => {
    // for (const key in formState) {
      // console.log(`{ ${ key }: ${formState[key]}}`);
      /* setFormState( form => ({
        ...form,
        [ key ]: ''
      }) ); */
    // }
    setFormState( initialForm );
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }

}
