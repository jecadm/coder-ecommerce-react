
import React from "react";
import './NavBar.css';
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li className="cart">
          <a href="/carrito">
            <FaShoppingCart />
            <span className="item-count">2</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
