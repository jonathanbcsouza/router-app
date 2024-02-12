import { createBrowserRouter } from 'react-router-dom';
import { Root } from './routes/Root.tsx';
import { About } from './routes/About.tsx';
import { Products } from './routes/Products.tsx';
import { ProductDetails } from './routes/ProductDetails.tsx';
import { Contact } from './routes/Contact.tsx';
import { Footer } from './routes/Footer.tsx';
import { ErrorPage } from './routes/ErrorPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <ProductDetails /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  { path: '/footer', element: <Footer /> },
]);
