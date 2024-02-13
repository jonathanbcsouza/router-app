import { Product } from "./components/product";
import { useProductsHook } from "./hooks/products-hook";

export const Products = () => {
  const products = useProductsHook();

  return (
    <div>
      <ul>
        {products?.map((product) => (
          <Product {...product} />
        ))}
      </ul>
    </div>
  );
};
