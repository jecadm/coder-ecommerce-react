import CardItem from "../components/Items/CardItem";
import fetchSimultion from "../components/fetchSimulation";
import productos from "../components/Items/Productos";
import { useState, useEffect } from "react";
import "../Items/containerCardItems.css"
import { useParams } from "react-router-dom";

const ContainerCardItems = () => {
  const [datos, setDatos] = useState([]);
  const [idCategory] = useParams();


  useEffect(() => {
    fetchSimultion(productos, 1000)
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
  <div className="containerCardItems"> 
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
    
   }
   </div>);
};
export default ContainerCardItems;
