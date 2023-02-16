import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (

    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Use context</Link> 
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">  
            <NavLink 
              className={( args2 ) => { 
                return `nav-link ${( args2.isActive ) ? 'el-fofo' : ''}`;
              }} 
              to='/' >
              Home 
            </NavLink> 
          
            <NavLink
              className={({ isActive }) => {
                return `nav-link ${ isActive? 'el-fofo' : ''}`;
              }}
              to={'/about'}>
              About
            </NavLink>  
          
            <NavLink
              className={({ isActive }) => {
                return `nav-link ${ isActive? 'el-fofo' : ''}`;
              }}
              to={'/login'}>
              Login
            </NavLink>  
          </ul>
        </div>
      </div>
    </nav>

    {/* <>
      <Link to="/" >Home</Link>
      <Link to={ { pathname: "about"}} >About</Link>
      <Link to="/login" >Login</Link>
    </> */}

    </>

  )
}
