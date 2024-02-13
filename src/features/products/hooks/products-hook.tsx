import { useEffect, useState } from "react";
import { TProduct } from "../types";
import { myApiFetch } from "../../../services/my-api";

export const useProductsHook = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    myApiFetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return products;
};
