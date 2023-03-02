import React, { useState, useEffect } from "react";
import { getProducts } from "../Items/ProductData";
import ItemList from "../Items/ItemList";
import "./ItemListContainer.css";

function ItemListContainer({ greeting })  {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="item-list-container">
      <h2>Productos</h2>
      <h2>{greeting}</h2>
      <ItemList products={products} />
      <p>Este es un ejemplo de componente contenedor con styling integrado</p>
    </div>
  );
}

export default ItemListContainer;