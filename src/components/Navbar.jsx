import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary py-2 px-4">
      <NavLink to="/" className="navbar-brand">
        WikiCountries
      </NavLink>
      <ul>
        <li>
          <NavLink to="/countries">Countries List</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
