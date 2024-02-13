import { useLoaderData } from "react-router-dom";
import { Product } from "./components/product";
import { TProductsLoaderData } from "./loaders/get-products-loader";

export const Products = () => {
  const { products } = useLoaderData() as TProductsLoaderData;

  return (
    <div>
      <ul>
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};
