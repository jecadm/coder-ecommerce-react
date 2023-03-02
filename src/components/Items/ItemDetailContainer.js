import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getItemsByCategory, getItems } from "./ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (categoryId) {
      getItemsByCategory(categoryId).then((response) => setItems(response));
    } else {
      getItems().then((response) => setItems(response));
    }
  }, [categoryId]);

  return <ItemList items={items} />;
}

export default ItemListContainer;
