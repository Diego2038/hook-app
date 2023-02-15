import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { Quote } from "./Quote";

 



export const MultipleCustomHooks = () => { 


  const { counter, incrementCounter } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`); 
  // const { author, quote } = !!data && data[0];
  

  return(
    <>
      <h1>MultipleCustomHook</h1>
      <ol>
        { 
          ( isLoading ) ? <div className="alert alert-info text-center text-successful">  Loading....😎😎😎</div> 
          : ( hasError )   ? <div className="alert alert-center text-danger">There's an internal problem in the server</div> 
          : 
          data.map( ( {quote, author } ) =>  (
                            <Quote key={quote} auth={author} quote={quote}/>)) 
                            
          /* (<li className="m-2">
            <blockquote>
              <p className="mb-1">{ quote }</p>
              <footer className="text-end mt-1">-  { author }</footer>
              
            </blockquote>
          </li>) */
        }
      </ol>

        <button 
          className="btn btn-primary"
          onClick={ () => incrementCounter(1) }>
          Next quote
        </button>

    </>
  )
}
