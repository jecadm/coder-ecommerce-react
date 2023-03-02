import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ProductData";
import { getItem } from "../async-mocks/items";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(itemId).then((response) => setItem(response));
  }, [itemId]);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;