import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
