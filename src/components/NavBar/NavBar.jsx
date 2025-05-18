import { NavLink } from "react-router";
import classes from "./NavBar.module.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const { items } = useContext(CartContext);
  const cartQuantity = items.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <nav className={classes.nav}>
      <div className={classes.home}>
        <NavLink className={classes.link} to="/">
          Home
        </NavLink>
      </div>
      <div className={classes.links}>
        <NavLink className={classes.link} to="/cart">
          Cart - {cartQuantity} item(s)
        </NavLink>
        <NavLink className={classes.link} to="/account">
          Account
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
