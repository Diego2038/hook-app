import { useEffect } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { Quote } from "./Quote";

 



export const MultipleCustomHooks = () => { 


  const { counter, incrementCounter } = useCounter();

  const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`); 
  

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  

  return(
    <>
      <h1>MultipleCustomHook</h1>
      <ol>
        { 
          ( isLoading ) ? <div className="alert alert-info text-center text-successful">  Loading....😎😎😎</div> : 
          ( hasError )   ? <div className="alert alert-center text-danger">There's an internal problem in the server</div> : 
                          data.map( ( {quote, author } ) =>  (
                            <Quote key={quote} auth={author} quote={quote}/>)) 
        }
      </ol>

        <button 
          className="btn btn-primary"
          onClick={ incrementCounter }>
          Next quote
        </button>

    </>
  )
}
