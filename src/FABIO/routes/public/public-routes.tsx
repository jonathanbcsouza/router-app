import { RouteObject } from "react-router-dom";
import { HomePage } from "../../pages/home-page";
import { TermsOfUsagePage } from "../../pages/terms-of-usage-page";
import { HeaderPublicLayout } from "../../layouts/header-public-layout";

export const PUBLIC_ROUTES: RouteObject[] = [
  {
    element: <HeaderPublicLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/terms", element: <TermsOfUsagePage /> },
    ],
  },
];
