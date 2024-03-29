import { useParams } from 'react-router-dom';
import { useData } from '../hooks/useData';
import { Spinner } from './Spinner';

type TParams = {
  id: string;
};

export const ProductDetails = () => {
  const { id } = useParams<TParams>();
  const products = useData('/data/products.json');
  const selectedProduct = products?.find((p) => p.id === id);

  if (!products) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Product Details</h1>
      {selectedProduct && (
        <>
          <p>Id: {selectedProduct.id}</p>
          <p>Name: {selectedProduct.name}</p>
          <p>Description: {selectedProduct.description}</p>
          <p>Price: {selectedProduct.price}</p>
        </>
      )}
    </div>
  );
};
