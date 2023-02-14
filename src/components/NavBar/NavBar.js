
import React from "react";
import './NavBar.css';
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="navbar">
      <div>
     {/*  Brand (título/nombre de la tienda) */}

        <h2>Tienda de morondanga</h2>
      </div>
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li className="cart">
          <a href="/carrito">
         {/*  componente CartWidget con un ícono y una notificación mostrando un número hardcodeado  */}
            <FaShoppingCart />
            {/* número hardcodeado (colocado en el código). Ubica este componente (CartWidget) dentro de Navbar */}
            <span className="item-count">2</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
