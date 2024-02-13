import { RouteObject } from "react-router-dom";
import { HeaderLayout } from "../../layouts/header-layout";
import { AboutPage } from "../../pages/about-page";
import { ContactsPage } from "../../pages/contacts-page";
import { ProductsPage } from "../../pages/products";
import { AuthLayout } from "../../layouts/auth-layout";

export const PRIVATE_ROUTES: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        element: <HeaderLayout />,
        children: [
          { path: "about", element: <AboutPage /> },
          {
            path: "products",
            element: <ProductsPage />,
          },
          { path: "contacts", element: <ContactsPage /> },
        ],
      },
    ],
  },
];
