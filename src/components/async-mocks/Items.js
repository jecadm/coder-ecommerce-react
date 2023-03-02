const items = [
    { id: '1', name: 'Producto 1', category: 'Categoría 1', price: 10 },
    { id: '2', name: 'Producto 2', category: 'Categoría 1', price: 20 },
    { id: '3', name: 'Producto 3', category: 'Categoría 2', price: 30 },
    { id: '4', name: 'Producto 4', category: 'Categoría 2', price: 40 },
  ];
  
  export const getItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 1000);
    });
  };
  
  export const getItemsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredItems = items.filter((item) => item.category === categoryId);
        resolve(filteredItems);
      }, 1000);
    });
  };
  
  export const getItem = (itemId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = items.find((item) => item.id === itemId);
        resolve(item);
      }, 1000);
    });
  };
  