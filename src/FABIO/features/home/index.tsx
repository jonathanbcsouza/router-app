import { CSSProperties } from "react";

const styles: CSSProperties = {
  backgroundColor: "red",
  height: "100vh",
};

export function Home() {
  return <h1 style={styles}>Home page</h1>;
}
