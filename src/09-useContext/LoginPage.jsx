import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const { setUser, user } = useContext( UserContext ); 

  const makeUser = () => {
    setUser({ 
      id: '123😭😭😭',
      name: 'Doomentio',
      email: 'CharlesChapli@email.com'
    });
  }


  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        {
          JSON.stringify( user, null, 3)
        }
      </pre>

      <button
        className="btn btn-primary"
        onClick={makeUser}>
        Establecer usuario
      </button>

    </>
  )
}