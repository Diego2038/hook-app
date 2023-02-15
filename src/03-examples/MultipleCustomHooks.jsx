 import { useCounter, useFetch } from "../hooks";
import { IsLoading } from "./IsLoading";
import { Quote } from "./Quote";
import { HasError } from "./HasError";

 



export const MultipleCustomHooks = () => { 


  const { counter, incrementCounter } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`); 
  const { author, quote } = !!data && data[0];
  

  return(
    <>
      <h1>MultipleCustomHook</h1>
      <ol>
        { 
          ( isLoading ) ? <IsLoading/>
          : ( hasError )? <HasError/>
          : <Quote auth={ author } quote={ quote } key={ quote }/>
          /* data.map( ( {quote, author } ) =>  (
                            <Quote key={quote} auth={author} quote={quote}/>)) */  
        }
      </ol>

        <button 
          disabled={ isLoading || hasError }
          className="btn btn-primary"
          onClick={ () => incrementCounter(1) }>
          Next quote
        </button>

    </>
  )
}
