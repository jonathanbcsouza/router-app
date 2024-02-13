import { useEffect, useState } from "react";
import { TProduct } from "../types";

export const useProductsHook = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return products;
};
