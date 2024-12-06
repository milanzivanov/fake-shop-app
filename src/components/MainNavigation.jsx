import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function MainNavigation() {
  const { cartItem, darkMode, toggleDarkMode } = useCart();
  return (
    <div className={`bg-slate-800 dark:bg-slate-300 ${darkMode && "dark"}`}>
      <header className="mx-auto max-w-7xl flex items-center justify-between  p-4">
        <NavLink to="/">
          <img
            className="h-16 w-auto cursor-pointer"
            src="https://ik.imagekit.io/milanz/milanzivanov_com/mzLogo2020_8BxKnLeaIZ.svg"
            alt=""
          />
        </NavLink>
        <nav>
          <ul className="flex space-x-4">
            <li className="text-lg text-slate-100 dark:text-gray-700 ">
              <NavLink
                className={({ isActive }) => (isActive ? `active` : undefined)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg text-slate-100 dark:text-gray-700 ">
              <NavLink
                className={({ isActive }) => (isActive ? `active` : undefined)}
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="text-lg text-slate-100 dark:text-gray-700">
              <NavLink
                className={({ isActive }) => (isActive ? `active` : undefined)}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="text-lg text-slate-100 dark:text-gray-700 ">
              <NavLink
                className={({ isActive }) => (isActive ? `active` : undefined)}
                to="/cart"
              >
                Cart ({cartItem.length})
              </NavLink>
            </li>
            <button
              className=" text-slate-100 dark:text-gray-700"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <HiOutlineSun size={24} />
              ) : (
                <HiOutlineMoon size={24} />
              )}
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
