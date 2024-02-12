import { CSSProperties } from "react";

const styles: CSSProperties = {
  backgroundColor: "grey",
  padding: "10px",
  marginBottom: "10px",
  textAlign: "center",
};

const fakeUser = "Jonathan";

export const Header = () => {
  return <header style={styles}>Header {fakeUser}</header>;
};
