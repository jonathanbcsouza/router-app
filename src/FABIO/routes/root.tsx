import { createBrowserRouter } from "react-router-dom";
import { AboutPage } from "../pages/about-page";
import { ProductsPage } from "../pages/products";
import { ContactsPage } from "../pages/contacts-page";
import { HomePage } from "../pages/home-page";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "about", element: <AboutPage /> },
  { path: "products", element: <ProductsPage /> },
  { path: "contacts", element: <ContactsPage /> },
]);
