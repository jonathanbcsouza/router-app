import { CSSProperties } from "react";

const divStyles: CSSProperties = {
  backgroundColor: "purple",
  padding: "10px",
  marginBottom: "10px",
  textAlign: "center",
};

const ulStyles: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const Footer = () => {
  return (
    <div style={divStyles}>
      <ul style={ulStyles}>
        <li>
          <h1>Contacts</h1>
        </li>
        <li>
          <p>Phone: 123-456-7890</p>
        </li>
        <li>Email: sales-team@crazy.nz</li>
      </ul>
    </div>
  );
};
