import { Link } from 'react-router-dom';
import { useData } from '../hooks/useData';
import { Spinner } from './Spinner';

export const Products = () => {
  const products = useData('/data/products.json');

  if (!products) {
    return <Spinner />;
  }

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
