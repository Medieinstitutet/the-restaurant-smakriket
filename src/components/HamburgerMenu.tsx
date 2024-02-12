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

  return (
    <>
      <section className="container--navigation">
        <section className={props.showNav ? "" : "container--hamburgerMenu"}>
          <button onClick={toggleHamburgerMenu}>
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
          {isOpen && (
            <nav className="mobile-menu">
              <ul>
                {props.menuItems.map((menuItem, index) => (
                  <li key={index}>
                    <NavLink to={menuItem.path}>{menuItem.label}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </section>
      </section>
    </>
  );
};
