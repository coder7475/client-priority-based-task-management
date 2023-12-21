import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky bg-slate-100">
      <nav className="w-full py-2 shadow-lg text-gray-600">
        <ul className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row flex-wrap flex-1 justify-around items-center">
          <NavLink to="/" className="hover:bg-slate-500 hover:text-white p-2 rounded-sm">
            Home
          </NavLink>
          <NavLink to="/register" className="hover:bg-slate-500 hover:text-white p-2 rounded-sm">
            Registration
          </NavLink>
          <NavLink to="/login" className="hover:bg-slate-500 hover:text-white p-2 rounded-sm">
            Login
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
