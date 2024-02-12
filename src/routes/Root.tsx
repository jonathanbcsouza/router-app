import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
