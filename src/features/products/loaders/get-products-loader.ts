import { LoaderFunctionArgs } from "react-router-dom";
import { TProduct } from "../types";

export type TProductsLoaderData = { products: TProduct[] };

export const getProductsLoader = async ({ request }: LoaderFunctionArgs) => {
  const response = await fetch("http://localhost:5173/products.json", {
    signal: request.signal,
  });
  const products = await response.json();

  return { products };
};