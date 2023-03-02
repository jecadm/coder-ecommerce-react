import React from "react";

function Item({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: {product.price} Pesos</p>
    </div>
  );
}

export default Item;