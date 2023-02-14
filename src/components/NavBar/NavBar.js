
import React from "react";
import './NavBar.css';
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {

 const clickHandler = () =>{
  alert("boton clikleable ")
 }

  return (
    <nav className="navbar">
      <div>
     {/*  Brand (título/nombre de la tienda) */}

        <h2>Tienda de Morondanga</h2>
      </div>
      <ul>
        <li>
          <button className="navar-booton" onClick={()=> clickHandler()}  href="/">Inicio</button>
        </li>
        <li>
          <button className="navar-booton" onClick={()=> clickHandler()} href="/productos">Productos</button>
        </li>
        <li onClick={()=> clickHandler()}  className="cart">
          <button className="navar-booton" href="/carrito">
         {/*  componente CartWidget con un ícono y una notificación mostrando un número hardcodeado  */}
            <FaShoppingCart />
            {/* número hardcodeado (colocado en el código). Ubica este componente (CartWidget) dentro de Navbar */}
            <span className="item-count">2</span>
          </button>
        </li>
      </ul>
    </nav>
  );

 

}

export default NavBar;
