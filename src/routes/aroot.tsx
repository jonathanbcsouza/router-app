import { createBrowserRouter } from "react-router-dom";
import { FooterLayout } from "../layouts/footer-layout";
import { PRIVATE_ROUTES } from "./private/private-routes";
import { PUBLIC_ROUTES } from "./public/public-routes";

export const router = createBrowserRouter([
  {
    element: <FooterLayout />,
    children: [...PUBLIC_ROUTES, ...PRIVATE_ROUTES],
  },
]);
