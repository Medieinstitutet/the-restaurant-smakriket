import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/Booking"}>Booking</NavLink>
          </li>
          <li>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/SignIn"}>Sign in</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
