
export const Quote = ( { auth, quote }  ) => {
  return (
    <> 
      <li className="m-2">
        <blockquote>
          <p className="mb-1">{ quote }</p>
          <footer className="text-end mt-1">-  { auth }</footer>
          
        </blockquote>
      </li>
    </>
  )
}
