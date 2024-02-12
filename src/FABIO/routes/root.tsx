import { createBrowserRouter } from "react-router-dom";
import { AboutPage } from "../pages/about-page";
import { ProductsPage } from "../pages/products";
import { ContactsPage } from "../pages/contacts-page";
import { HomePage } from "../pages/home-page";
import { HeaderLayout } from "../layouts/header-layout";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    element: <HeaderLayout />,
    children: [
      { path: "about", element: <AboutPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "contacts", element: <ContactsPage /> },
    ],
  },
]);
