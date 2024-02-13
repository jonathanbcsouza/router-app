export const getProductsLoader = async () => {
  return fetch("http://localhost:5173/products.json");
};
