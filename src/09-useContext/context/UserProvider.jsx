import { useState } from "react";
import { UserContext } from "./UserContext";

/* const user = {
  id: '123',
  name: 'Elmo Lopez',
  email: 'ElPapi_053@email.com'
} */

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (  
    // <UserContext.Provider value={{ hola: 'Mundo', user }} >
    <UserContext.Provider value={{ hola: 'Mundo', setUser, user }} >
      { children }
    </UserContext.Provider> 
  )
}
