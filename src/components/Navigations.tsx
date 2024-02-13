import { NavLink } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { useState } from "react";

export function Navigation() {
  const [showNav, setShowNav] = useState(false);

  const menuItems = [
    { path: "/", label: "HEM" },
    { path: "/Booking", label: "BOKA/RESERVE" },
    { path: "/Contact", label: "KONTAKT" },
    { path: "/SignIn", label: "LOGGA IN" },
  ];

  if (showNav) {
    setShowNav(!showNav);
  }

  return (
    <>
      <section className="container--navigation">
        <HamburgerMenu menuItems={menuItems} showNav={showNav} />
        <section className={!showNav ? "container--desktopMenu" : ""}>
          <nav className="desktop-menu">
            <ul>
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <NavLink to={menuItem.path}>{menuItem.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </section>
    </>
  );
}
