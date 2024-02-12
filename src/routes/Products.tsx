import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

// const products: Product[] = productsJson;

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const callFakeApi = async () => {
      const request = await fetch("http://localhost:5173/products.json");
      const data = await request.json();
      setProducts(data);
    };

    callFakeApi();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <p>This is the about page.</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
