import { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContextProvider";


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handelLogout =()=>{
    logOut()
    .then(() => {
      <Navigate to={'/about'}></Navigate>
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
    
  }
    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      
    </div>
    <a className="btn btn-ghost text-xl">Is Event Planner</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={'/'}>Home</NavLink></li>
      
      <li><NavLink to={'/about'}>About</NavLink></li>
      <li><NavLink to={'/service'}>Services</NavLink></li>
      <li><NavLink to={'/service'}>Contact</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <button onClick={handelLogout} className="btn">Log Out</button>
      :
      <Link to={'/login'} className="btn">
        <button className="btn">Login</button>
      </Link>
    }
    
  </div>
</div>
    );
};

export default Navbar;