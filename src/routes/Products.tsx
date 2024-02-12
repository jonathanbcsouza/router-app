import { Link } from 'react-router-dom';
import productsJson from '../data/products.json';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const products: Product[] = productsJson;

export const Products = () => {
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
