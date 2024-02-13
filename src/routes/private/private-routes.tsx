import { RouteObject } from "react-router-dom";
import { HeaderLayout } from "../../layouts/header-layout";
import { AboutPage } from "../../pages/about-page";
import { ContactsPage } from "../../pages/contacts-page";
import { ProductsPage } from "../../pages/products";
import { AuthLayout } from "../../layouts/auth-layout";
import { getProductsLoader } from "../../features/products/loaders/get-products-loader";
import { ProductsErrorBoundary } from "../../features/products/error-boundary";
import { getUserLoader } from "../../features/auth/loaders/get-user-loader";
import { EPrivateRouteNames } from "./definitions";

export const PRIVATE_ROUTES: RouteObject[] = [
  {
    element: <AuthLayout />,
    loader: getUserLoader,
    children: [
      {
        element: <HeaderLayout />,
        children: [
          { path: EPrivateRouteNames.ABOUT, element: <AboutPage /> },
          {
            path: EPrivateRouteNames.PRODUCTS,
            element: <ProductsPage />,
            loader: getProductsLoader,
            errorElement: <ProductsErrorBoundary />,
          },
          { path: EPrivateRouteNames.CONTACTS, element: <ContactsPage /> },
        ],
      },
    ],
  },
];
