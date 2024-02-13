import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import { EPrivateRouteNames } from "../../../routes/private/definitions";

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
    <header style={styles}>
      Header {userIsLogged ? fakeUser : null}
      <nav>
        <ul>
          <li>
            <NavLink
              to={EPrivateRouteNames.ABOUT}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={EPrivateRouteNames.PRODUCTS}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={EPrivateRouteNames.CONTACTS}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
