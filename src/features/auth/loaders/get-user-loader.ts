import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { EPublicRouteNames } from "../../../routes/public/definitions";

export type TUserLoaderData = { user: unknown };

export const getUserLoader = async ({ request }: LoaderFunctionArgs) => {
  const response = await fetch("http://localhost:5173/user.json", {
    signal: request.signal,
  });
  const user = await response.json();

  if (!user) throw redirect(EPublicRouteNames.HOME);

  return { user };
};
