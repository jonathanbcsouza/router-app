import { Navigate, Outlet } from "react-router-dom";
import { EPublicRouteNames } from "../routes/public/definitions";

const fakeUserHasToken = true;

export const AuthLayout = () => {
  if (!fakeUserHasToken) {
    return <Navigate to={EPublicRouteNames.HOME} />;
  }

  return <Outlet />;
};
