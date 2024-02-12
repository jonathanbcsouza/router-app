import { Outlet } from "react-router-dom";
import { Header } from "../features/root";

export const HeaderPublicLayout = () => {
  return (
    <>
      <Header userIsLogged={false} />
      <Outlet />
    </>
  );
};
