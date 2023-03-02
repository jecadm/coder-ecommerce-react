const products = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripción del producto 1",
      price: 10,
      pictureUrl: URL,
      stock:5,
      type: "tipo de producto",
      
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción del producto 2",
      price: 20,
      pictureUrl: URL,
      stock:5,
      type: "tipo de producto",
      
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripción del producto 3",
      price: 30,
      pictureUrl: URL,
      stock:5,
      type: "tipo de producto",
      
    },
    {
      id: 4,
      name: "Producto 3",
      description: "Descripción del producto 3",
      price: 30,
      pictureUrl: URL,
      stock:5,
      type: "tipo de producto",
      
    },
    {
    id: 5,
    name: "Producto 3",
    description: "Descripción del producto 3",
    price: 30,
    pictureUrl: URL,
    stock:5,
    type: "tipo de producto",
    
  },
  {
    id: 6,
    name: "Producto 3",
    description: "Descripción del producto 3",
    price: 30,
    pictureUrl: URL,
    stock:5,
    type: "tipo de producto",
    
  },




  ];
  
  export function getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  }