import { UserContext } from "./UserContext";

const user = {
  id: '123',
  name: 'Elmo Lopez',
  email: 'ElPapi_053@email.com'
}

export const UserProvider = ({ children }) => {
  return (  
    <UserContext.Provider value={{ hola: 'Mundo', user }} >
      { children }
    </UserContext.Provider> 
  )
}
