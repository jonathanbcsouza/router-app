import { CSSProperties } from "react";
import { translations } from "../../locale";

const styles: CSSProperties = {
  backgroundColor: "red",
  height: "100vh",
};

export function Home() {
  return <h1 style={styles}>{translations.pages.home.title}</h1>;
}
