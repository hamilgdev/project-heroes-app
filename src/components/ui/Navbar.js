import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const action = {
      type: types.logout,
    };
    dispatch(action);
    navigate("/login", { replace: true });
  };

  return (
    <nav className="flex justify-between w-full py-2 px-4 | bg-slate-800 text-slate-400">
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/" className="text-white">
            Asoiciaciones
          </Link>
        </li>
        <li>
          <NavLink
            to="/marvel"
            className={({ isActive }) => (isActive ? "text-cyan-500" : "")}
          >
            Marvel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dc"
            className={({ isActive }) => (isActive ? "text-cyan-500" : "")}
          >
            DC
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? "text-cyan-500" : "")}
          >
            Search
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <h3 className="text-cyan-500 font-semibold">{user.name}</h3>
        <button
          className="px-2 py-1 | bg-sky-900 text-sky-300 | rounded-md | hover:bg-sky-300 hover:text-sky-900"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
