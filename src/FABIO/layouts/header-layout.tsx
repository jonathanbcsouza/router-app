import { Outlet } from "react-router-dom";
import { Header } from "../features/root";

export const HeaderLayout = () => (
  <>
    <Header userIsLogged={true} />
    <Outlet />
  </>
);
