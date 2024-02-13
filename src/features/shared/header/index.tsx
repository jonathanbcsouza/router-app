import { CSSProperties } from "react";

const styles: CSSProperties = {
  backgroundColor: "grey",
  padding: "10px",
  marginBottom: "10px",
  textAlign: "center",
};

const fakeUser = "Jonathan";

type THeaderProps = {
  userIsLogged?: boolean;
};

export const Header = ({ userIsLogged = false }: THeaderProps) => {
  return (
    <header style={styles}>Header {userIsLogged ? fakeUser : null}</header>
  );
};
