import { Outlet } from "react-router-dom";
import { Footer } from "../features/root";

export const FooterLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
