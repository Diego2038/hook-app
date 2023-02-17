import { Routes, Route, Navigate,} from "react-router-dom"
import { HomePage, AboutPage, LoginPage, Navbar } from './'
import { UserProvider } from "./context/UserProvider"
export const Main = () => {
  return ( 
    <UserProvider>
      <h1>Main</h1>
        <Navbar/>
      <hr />
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route  path="about" element={ <AboutPage/> } />
        <Route path="login" element={ <LoginPage/> } />

        {/* <Route path="/*" element={ <AboutPage/> } />   */}
        {/* Por si deseas atrapar cualquier otra dirección no definida */}

        <Route path="/*" element={ <Navigate to='about' /> } />
        {/* Así es como realizas redirección  */}
        
      </Routes>
    </UserProvider> 
  )
}
