import { useEffect, useState } from "react";

 

export const useFetch = ( url ) => { 
  
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })
  
  const getData =  async () => {
    
    setState({
      ...state,
      hasError: false,
      isLoading: true
    });
    
    // try {
      console.log({ url });
      const resp = await fetch( url);
      const data = await resp.json();
      console.log( {data });
      setState({
        data,
        isLoading: false,
        hasError: false
      });
    // } 
    /* catch ( err ) {
      setState({
        data: null,
        isLoading: false,
        hasError: true
      })
    } */
  } 

  useEffect(() => {
    getData();
  }, [ url ]); // ! aquí faltó poner el url
  

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
