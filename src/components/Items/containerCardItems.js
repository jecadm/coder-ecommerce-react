import CardItem from "./CardItem";
import fetchSimultion from "../fetchSimulation";
import productos from "./Productos";
import { useState, useEffect } from "react";

const ContainerCardItems = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetchSimultion(productos, 2000)
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
  }, []);

  return <> 
  {
    datos.map(product => (
         <CardItem 
         key={product.id}
         imagen={product.picture}
         title={product.name}
         cantidad={product.stock}
         precio={product.price}







  />
    ))
    
   }</>;
};
export default ContainerCardItems;
