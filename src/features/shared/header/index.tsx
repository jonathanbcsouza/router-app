import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import { EPrivateRouteNames } from "../../../routes/private/definitions";
import { translations } from "../../../locale";

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
      {translations.sharedComponents.header.title}
      {userIsLogged ? fakeUser : null}
      <nav>
        <ul>
          <li>
            <NavLink
              to={EPrivateRouteNames.ABOUT}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {translations.pages.about.title}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={EPrivateRouteNames.PRODUCTS}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {translations.pages.products.title}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={EPrivateRouteNames.CONTACTS}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {translations.pages.contacts.title}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
