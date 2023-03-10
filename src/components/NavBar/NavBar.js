
import React from "react";
import './NavBar.css';
import { FaShoppingCart } from "react-icons/fa";
//import { Link } from 'react-router-dom';
import CartWidget from '../Items/CartWidget';
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Brand from "../Brand";

function NavBar() {

 const clickHandler = () =>{
  alert("boton clikleable ")
 }

  return (
    <nav className="navbar">

      <div className="conteinerBrand">
        <Brand/>
        
        </div>
     <div>
     
      <h2>Tienda MORONDANGA</h2>
      </div>
      
      <div className="containerItemList navar-booton ">
        <ItemListContainer 
        itemUno = "TipodeUno"
        itemDos = "TipodeDos"
        itemTres = "TipodeTres"
        //itemCuatro = "TipodeCuatro"
        />
     
        
      </div>
      <div className="containercart">
        <CartWidget/>
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
