import { RouteObject } from "react-router-dom";
import { HeaderLayout } from "../../layouts/header-layout";
import { AboutPage } from "../../pages/about-page";
import { ContactsPage } from "../../pages/contacts-page";
import { ProductsPage } from "../../pages/products";
import { AuthLayout } from "../../layouts/auth-layout";
import { getProductsLoader } from "../../features/products/loaders/get-products-loader";
import { ErrorBoundary } from "../../features/products/error-boundary";
import { getUserLoader } from "../../features/auth/loaders/get-user-loader";

export const PRIVATE_ROUTES: RouteObject[] = [
  {
    element: <AuthLayout />,
    loader: getUserLoader,
    children: [
      {
        element: <HeaderLayout />,
        children: [
          { path: "about", element: <AboutPage /> },
          {
            path: "products",
            element: <ProductsPage />,
            loader: getProductsLoader,
            errorElement: <ErrorBoundary />,
            hydrateFallbackElement: <div>Loading...</div>,
          },
          { path: "contacts", element: <ContactsPage /> },
        ],
      },
    ],
  },
];
