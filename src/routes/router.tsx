import { createBrowserRouter } from 'react-router-dom';
import { Home } from './Home.tsx';
import { Products } from './Products.tsx';
import { ErrorPage } from './ErrorPage.tsx';
import { App } from '../App.tsx';
import { ProductDetails } from './ProductDetails.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/products/:id',
    element: <ProductDetails />,
  },
]);
