import React from "react";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <p>Este es un ejemplo de componente contenedor con styling integrado</p>
    </div>
  );
}

export default ItemListContainer;
