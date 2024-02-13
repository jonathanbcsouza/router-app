import { createBrowserRouter } from 'react-router-dom';
import { App } from './components/App.tsx';
import { About } from './routes/About.tsx';
import { Products } from './routes/Products.tsx';
import { ProductDetails } from './routes/ProductDetails.tsx';
import { Contact } from './routes/Contact.tsx';
import { ErrorPage } from './routes/ErrorPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <ProductDetails /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);
