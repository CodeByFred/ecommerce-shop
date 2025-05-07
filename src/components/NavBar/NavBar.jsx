import { NavLink } from "react-router";
import classes from "./NavBar.module.scss";

const NavBar = () => {
  const linkStyles = ({ isActive }) =>
    isActive ? `${classes.link} ${classes.active_link}` : classes.link;

  return (
    <nav className={classes.nav}>
      <div className={classes.home}>
        <NavLink className={linkStyles} to="/">
          Home
        </NavLink>
      </div>
      <div className={classes.links}>
        <NavLink className={linkStyles} to="/cart">
          Cart
        </NavLink>
        <NavLink className={linkStyles} to="/account">
          Account
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
