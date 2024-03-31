import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {

  const {user, LogOut} = useContext(AuthContext)

  const handleLogOut = () => {
    LogOut()
    .then(() => console.log('singout successfully'))
    .catch(error => console.error(error))
  }

  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/login'>Login</NavLink>
      </li>
      <li>
        <NavLink to='/registration'>Registration</NavLink>
      </li>
      {
          user && <>
          <li>
          <NavLink to='/orders'>Order List</NavLink>
        </li>
          </>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-5 w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl text-primary gap-0 font-black ">Auth<span className="text-secondary">Route</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        { user ? <>
            <span>{user.email}</span>
            <span className="text-secondary font-extrabold text-2xl">{user.displayName}</span>
            <a onClick={handleLogOut} className="btn">LogOut</a>
        </> :
         
         <Link to='/login'><button className="bg-primary btn text-white">Sign in</button></Link>
        }
        
      </div>
    </div>
  );
};

export default Header;
