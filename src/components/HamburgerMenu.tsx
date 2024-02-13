import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

interface MenuItem {
  path: string;
  label: string;
}

interface IHamburgerMenyProps {
  menuItems: MenuItem[];
  showNav: boolean;
}

export const HamburgerMenu = (props: IHamburgerMenyProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className={props.showNav ? "" : "container--hamburgerMenu"}>
        <section className="container--menuLogo__white">
          <img className="menuLogo__white" src="/src/assets/logoWhite.png" alt="" />
        </section>
        <button onClick={toggleHamburgerMenu} className="hamburgerMenu--button">
          {isOpen ? (
            <IoMdClose className="hamburgerMenu--icon__xmark" />
          ) : (
            <IoMdMenu className="hamburgerMenu--icon__lines" />
          )}
        </button>
        {isOpen && (
          <nav className="hamburgerMenu">
            <ul className="hamburgerMenu--list">
              {props.menuItems.map((menuItem, index) => (
                <li key={index}>
                  <NavLink onClick={handleNavClick} className="hamburgerMenu--listLinks" to={menuItem.path}>
                    {menuItem.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </section>
    </>
  );
};
