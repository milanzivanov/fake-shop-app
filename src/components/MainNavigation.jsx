import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function MainNavigation() {
  const { cartItem } = useContext(CartContext);
  return (
    <div className="bg-slate-100 ">
      <header className="mx-auto max-w-7xl flex items-center justify-between p-4">
        <img
          className="h-16 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt=""
        />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                className="text-lg text-stone-700 hover:text-blue-700"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg text-stone-700 hover:text-blue-700"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg text-stone-700 hover:text-blue-700"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg text-stone-700 hover:text-blue-700"
                to="/cart"
              >
                Cart ({cartItem.length})
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
