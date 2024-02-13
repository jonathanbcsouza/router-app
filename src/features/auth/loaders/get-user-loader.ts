import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { EPublicRouteNames } from "../../../routes/public/definitions";
import { myApiFetch } from "../../../services/my-api";

export type TUserLoaderData = { user: unknown };

export const getUserLoader = async ({ request }: LoaderFunctionArgs) => {
  const response = await myApiFetch("/user.json", {
    signal: request.signal,
  });
  const user = await response.json();

  if (!user) throw redirect(EPublicRouteNames.HOME);

  return { user };
};
