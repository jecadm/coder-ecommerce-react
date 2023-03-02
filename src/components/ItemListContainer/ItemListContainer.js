import React, { useState, useEffect } from "react";
import { getProducts } from "../Items/ProductData";
import ItemList from "../Items/ItemList";
import "./ItemListContainer.css";
import {Link} from "react-router-dom"

const ItemListContainer = (props)=>{



  return (

    <ul>
      <li>
      <Link to="category/TipodeUno">{props.itemUno}</Link>
      </li>
      <li>
      <Link to="category/TipodeDos">{props.itemDos}</Link>
        </li>
      <li>
      <Link to="category/TipodeTres">{props.itemTres}</Link>
      </li>
     
    </ul>





    
  );
}

export default ItemListContainer;
