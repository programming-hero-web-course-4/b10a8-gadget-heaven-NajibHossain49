import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaCreditCard } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto">
      {/* Navbar-Start */}
      <div className="navbar-start">
        <NavLink className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
      </div>
      {/* Navbar-Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
      {/* Navbar-End */}
      <div className="navbar-end">
        <NavLink to="/card" className="btn" aria-label="Card">
          <FaCreditCard />
        </NavLink>
        <NavLink to="/favorites" className="btn" aria-label="Favorites">
          <FaHeart />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
