import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-4xl mx-auto sticky bg-slate-100">
      <nav className="w-full py-2 shadow-lg">
        <ul className="flex flex-col-reverse md:flex-row flex-wrap flex-1 justify-around items-center">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/register">
            Registration
          </NavLink>
          <NavLink to="/login">
            Login
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
