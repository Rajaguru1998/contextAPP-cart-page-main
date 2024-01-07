import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../ContextAPI/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Cart <span>({cart.length})</span>
          </NavLink>
        </li>
        <li>
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
    </div>
  );
};

export default Header;
