import { LoaderFunctionArgs } from "react-router-dom";
import { TProduct } from "../types";
import { myApiFetch } from "../../../services/my-api";

export type TProductsLoaderData = { products: TProduct[] };

export const getProductsLoader = async ({ request }: LoaderFunctionArgs) => {
  const response = await myApiFetch("/products.json", {
    signal: request.signal, // Pass the AbortSignal to the fetch request
  });
  const products: TProduct[] = await response.json();

  return { products };
};
