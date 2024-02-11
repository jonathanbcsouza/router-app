import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { Product } from './Products';

type TParams = {
  id: string;
};

const data: Product[] = products;

export const ProductDetails = () => {
  const { id } = useParams<TParams>();

  const selectedProduct = data.find((p) => p.id === id);

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
