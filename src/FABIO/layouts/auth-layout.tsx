import { Navigate, Outlet } from "react-router-dom";

const fakeUserHasToken = true;

export const AuthLayout = () => {
  if (!fakeUserHasToken) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
