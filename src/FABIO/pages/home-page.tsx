import { Header, Home } from "../features/root";

export const HomePage = () => {
  return (
    <>
      <Header userIsLogged={false} />
      <Home />
    </>
  );
};
